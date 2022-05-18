// SPDX-License-Identifier: MIT
pragma solidity =0.8.10;

interface IEthosERC721DeckWrapper {  
    function itemIdOf(address tokenAddress) external view returns(uint256);
}