// SPDX-License-Identifier: MIT
pragma solidity =0.8.10;

//openzeppelin-chainlink
import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";
import "@chainlink/contracts/src/v0.8/Denominations.sol";


//interfaces
import { IAaveLendingPool } from "./interfaces/IAaveLendingPool.sol";
import { IAaveProtocolDataProvider } from "./interfaces/IAaveProtocolDataProvider.sol";
import { IAaveDebtToken } from "./interfaces/IAaveDebtToken.sol";
import { ICreditVault } from "./interfaces/ICreditVault.sol";


import "hardhat/console.sol";

/**
 * @notice debitors contract
 */

contract DebitVault is Ownable {

    event positionRepay(uint256 counter, address creditor, address debitor);

    using SafeERC20 for IERC20;

    //internal constants
    IAaveLendingPool private aaveLendingPool;
    ICreditVault private creditVault;
    FeedRegistryInterface private registry;

    //example for this POC
    struct tokenData {
        address token;
        uint256 ltv;
        uint256 interest;
    }
    tokenData private wethData;

    
    constructor(address _aaveLendingPool, address _creditVault, address _registry){
        //init vars
        aaveLendingPool = IAaveLendingPool(_aaveLendingPool);
        creditVault = ICreditVault(_creditVault);
        registry = FeedRegistryInterface(_registry);

        //example for this POC
        wethData.token=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; //ethereum loan to value 80%
        wethData.ltv=80;
        wethData.interest=1; //imagine that it is fixed for all positions, all time
    }   


    /**
     * @dev Open the position by the debitor view
     * @param _creditor The creditor of asset
     * @param _token The address of the underlying asset to lend
     * @param _amount The amount to be deposited
     * @param _collateral The address of the collateral 
     * @param _amountCollateral The amount of the collateral
     * @param _month The month of maturity
     * @param _year the year of maturity
    **/
    function openPosition(address _creditor, address _token, uint256 _amount, address _collateral, uint256 _amountCollateral, uint256 _month, uint256 _year) public {
        //check collateral
        require(wethData.token != _token, "Collateral not admitted");
        uint256 collateralToDeposit = (_amount/wethData.ltv)*100;
        require(_amountCollateral > collateralToDeposit, "No enough collateral specified");
        require(IERC20(_collateral).balanceOf(msg.sender)>collateralToDeposit, "no enough collateral in your balance");
        
        //check funds on creditAccount
        creditVault.approveOnCreditDelegation(_amount);
        
        //approve tranfer collateral for escrow contract(CreditVault)
        IERC20(_collateral).safeTransferFrom(msg.sender, address(this), _amountCollateral);
        IERC20(_collateral).safeApprove(address(creditVault),_amountCollateral);    

        //borrow
        aaveLendingPool.borrow(_token,_amount,1,0,address(creditVault));
        IERC20(_token).safeTransfer(msg.sender, _amount);

        
        //saveData and creditor take collateral
        creditVault.saveData(msg.sender,_creditor,_token,_amount,_collateral,_amountCollateral,_month,_year,wethData.interest);

          
    }


    /**
     * @dev Repay the debt by depositor view
     * @param _counter The id of the position
     * @param _creditor The address of the creditor
     * @param _token The address of the token of repayment
     * @param _amount The amount to repay
    **/
    function repayDebt(uint256 _counter, address _creditor, address _token, uint256 _amount) public {      
        //check the balance
        require(IERC20(_token).balanceOf(msg.sender) >=_amount, "you have no the amount specified in your account");

        //send data to creditVault for the checks if it's ok return collateral to the debitor
        (, uint256 amountToCreditor) = creditVault.returnCollateral(_amount,_counter);
        
        //repay the debt on aave and to the creditor(aave check the existence and data)
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        IERC20(_token).safeApprove(address(aaveLendingPool), _amount);
        aaveLendingPool.repay(_token, _amount, 1, address(creditVault)); //write the amount for work around because it's amountOnAave + interestOnAave. it is needed to obtain interests on aave
        
        IERC20(_token).safeTransfer(_creditor, amountToCreditor); //TO CREDITOR IF TOKENIZED=FALSE
        // TD PAYMENT TO CREDITORS IF TOKENIZED = TRUE

        emit positionRepay(_counter,_creditor,msg.sender);
    }


}
