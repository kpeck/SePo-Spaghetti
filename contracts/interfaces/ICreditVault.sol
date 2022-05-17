// SPDX-License-Identifier: MIT
pragma solidity =0.8.10;

interface ICreditVault {
    
    function approveOnCreditDelegation(uint256 _amount) external;
    function saveData(address _debitor, address _creditor, address _token, uint256 _amount, address _collateral, uint256 _amountCollateral, uint256 _month, uint256 _year, uint256 _interest) external;
    function returnCollateral(uint256 _amount, uint256 _counter) external returns (uint256,uint256);
}