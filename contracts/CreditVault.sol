// SPDX-License-Identifier: MIT
pragma solidity =0.8.10;

//openzeppelin-chainlink-datetime
import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";
import "@chainlink/contracts/src/v0.8/Denominations.sol";
import { DateTime } from "./libraries/DateTime.sol";



//interfaces
import { IAaveLendingPool } from "./interfaces/IAaveLendingPool.sol";
import { IAaveProtocolDataProvider } from "./interfaces/IAaveProtocolDataProvider.sol";
import { IAaveDebtToken } from "./interfaces/IAaveDebtToken.sol";


import "hardhat/console.sol";

/**
 * @notice escrow contract for collaterals, it is permitted to deposit only USDC
 */
//this is also the escrow contract with all the collaterals
contract CreditVault is Ownable, DateTime{

    event newPosition(uint256 counter, address debitor, address creditor, address token, address collateral, uint256 amount, uint256 amountCollateral, uint256 month, uint256 year);
    event positionTakeCollateral(uint256 counter, address debitor, address creditor);

    using SafeERC20 for IERC20;

    //internal constants 
    IAaveLendingPool public aaveLendingPool;
    IAaveDebtToken private aaveDebtTokenBtc;
    FeedRegistryInterface private registry;
    uint256 private counter;
    address private debitVault;

   
    struct accountBalance{
        uint256 deposited;
        bool lended;
    }
    mapping (address => mapping (address => accountBalance)) private creditLine;

    struct positionOpened{
        address debitor;
        address creditor;
        address token;
        address collateral;
        uint256 amount;
        uint256 amountCollateral;
        uint256 month;
        uint256 year;
        uint256 interest;
        bool closed;
        bool tokenized;
    }
    mapping (uint256 => positionOpened) private positions; //counter - structPosition
          
    constructor(address _aaveLendingPool, address _registry, address _aaveBtcStable) {
        //init vars
        aaveLendingPool = IAaveLendingPool(_aaveLendingPool);
        aaveDebtTokenBtc = IAaveDebtToken(_aaveBtcStable);
        registry = FeedRegistryInterface(_registry);
        counter=0;
    }

    function setDebitVault(address _debitVault) public onlyOwner {
        debitVault=_debitVault;
    }

    /**
     * @dev Deposit an amount of token on aave. Creditor Function.
     * @param _token The address of the underlying asset to deposit
     * @param _amount The amount to be deposited
     **/
    function deposit(address _token, uint256 _amount) public {
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        IERC20(_token).safeApprove(address(aaveLendingPool),_amount);
        aaveLendingPool.deposit(address(IERC20(_token)), _amount, address(this), 0);

        if(creditLine[msg.sender][_token].deposited==0){
            creditLine[msg.sender][_token].lended = false;
        }     
        creditLine[msg.sender][_token].deposited += _amount;        
    }

    /**
     * @dev Deposit an amount of token on aave. Creditor Function.
     * @param _token The address of the underlying asset to withdraw
     **/
    function withdraw(address _token) public {
        require(!creditLine[msg.sender][_token].lended,"The deposits in this asset are borrowed");
        require(creditLine[msg.sender][_token].deposited>0,"The deposits in this asset are equal to 0");
        aaveLendingPool.withdraw(_token,creditLine[msg.sender][_token].deposited,msg.sender);
        creditLine[msg.sender][_token].deposited = 0;
        creditLine[msg.sender][_token].lended = false;
    }

    /**
     * @dev Approve the delegation of the credit line on aave. Creditor function. Approve the debitor on borrow the asset.
     * @param _amount The amount of the asset to borrow
    **/
    function approveOnCreditDelegation(uint256 _amount) public {
        aaveDebtTokenBtc.approveDelegation(debitVault, _amount);
    }


    /**
     * @dev Save the data of the new position opened
     * @param _debitor The borrower of asset 
     * @param _creditor The creditor of asset
     * @param _token The address of the underlying asset to lend
     * @param _amount The amount to be deposited
     * @param _collateral The address of the collateral 
     * @param _amountCollateral The amount of the collateral
     * @param _month The month of maturity
     * @param _year the year of maturity
    **/
    function saveData(address _debitor, address _creditor, address _token, uint256 _amount, address _collateral, uint256 _amountCollateral, uint256 _month, uint256 _year, uint256 _interest) public {
        //transfer the collateral
        IERC20(_collateral).safeTransferFrom(msg.sender, address(this), _amountCollateral);

        //saveDataOfThePosition
        positions[counter].debitor = _debitor;
        positions[counter].creditor= _creditor;
        positions[counter].token = _token;
        positions[counter].collateral = _collateral;
        positions[counter].amount = _amount;
        positions[counter].amountCollateral = _amountCollateral;
        positions[counter].month = _month;
        positions[counter].year = _year;
        positions[counter].interest = _interest;
        positions[counter].closed = false;
        positions[counter].tokenized = false;

        //change availability creditor TD change this in an amount and with oracles and ltv of aave save the amount lended
        creditLine[_creditor][_token].lended = true;

        emit newPosition(counter, _debitor, _creditor, _token, _collateral, _amount, _amountCollateral, _month, _year);
        
        counter++;

    }
    

    /**
     * @dev Take the collateral if there is no repayment
     * @param _amount The amount of the repayment for the check
     * @param _counter The id of the position
    **/
    function returnCollateral(uint256 _amount, uint256 _counter) public returns (uint256,uint256){
        //check if the position is open
        require(!positions[_counter].closed, "position already closed");

        //check if the amount that the debitor want to repay is sufficient
        uint256 amountForAave=positions[_counter].amount;
        uint256 amountForCreditor=(amountForAave/100)*positions[_counter].interest;
        require(_amount-amountForAave>=amountForCreditor,"not enough amount for the repayment");

        //return the collateral
        IERC20(positions[_counter].collateral).safeTransfer(positions[_counter].debitor, positions[_counter].amountCollateral);

        //close the position on the mapping
        positions[_counter].closed=true;

        return (amountForAave, amountForCreditor);
    }

    /**
     * @dev Take the collateral if there is no repayment
     * @param _counter The id of the position
     **/
    function takeCollateral(uint256 _counter) public {
        //check if the position is closed
        require(!positions[_counter].closed, "Position already closed");

        
        //check with  if month and year are expired
        require(getYear(block.timestamp)>positions[_counter].year || (getYear(block.timestamp)==positions[_counter].year && getMonth(block.timestamp)>=positions[_counter].month),"Not yet maturated");
        
        //take the collateral
        IERC20(positions[_counter].collateral).safeTransfer(positions[_counter].creditor,positions[_counter].amountCollateral);

        //TD HERE THE CREDITOR WILL REPAY BY HIS OWN THE CREDIT DELEGATION ON AAVE

        //close the position
        positions[_counter].closed=true;
    }



}
