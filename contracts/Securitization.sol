// SPDX-License-Identifier: MIT
pragma solidity =0.8.10;

import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import { ICreditVault } from "./interfaces/ICreditVault.sol";
import { IERC721securitization } from "./interfaces/IERC721securitization.sol";
import { ERC721securitization } from "./ERC721securitization.sol";
import { IEthosERC721DeckWrapper } from "./interfaces/IEthosERC721DeckWrapper.sol";


import "hardhat/console.sol";


contract Securitization is ERC721URIStorage, Ownable{

    ICreditVault private creditVault;
    IEthosERC721DeckWrapper private ethosDeck;
    uint256 [] values;
    address [] receivers;
    ERC721 private contractNft;

    mapping (uint256 => address) private counterContract; //counter => addressERC721

    struct dataPosition {
        uint256 amountPerPosition;
        uint256 countNft;
    }
    mapping (uint256 => dataPosition) private amountPerPosition; //counterPosition => totalAmountTokenized - countNftPerPosition


    constructor (address _creditVault, address _ethosDeck) ERC721("Securities", "Sec"){
        creditVault = ICreditVault(_creditVault);
        ethosDeck=IEthosERC721DeckWrapper(_ethosDeck);
    }

    function mint(uint256 _counter, uint256 _amount, string memory _tokenURI) public returns (uint256)
    {
        //check that the creditor is minting is own credits
        require(creditVault.getPositionCreditor(_counter)==msg.sender, "You have no the permits. You are not the creditor");
        //check that the nft does not exceeds the amount of the credit
        require(creditVault.getPositionAmount(_counter)>=(amountPerPosition[_counter].amountPerPosition+_amount),"You have exceeded the limits of amount");

        //create nft
        uint256 newItemId = IERC721securitization(counterContract[_counter]).mint(_tokenURI);
        
        amountPerPosition[_counter].amountPerPosition+=_amount;
        amountPerPosition[_counter].countNft++;

        return newItemId;

    }

    function ethereansOsDeck(uint256 _counter, uint256 itemId, address _creditor) public {
        delete values;
        delete receivers;
        values.push(1000000000000000000);
        receivers.push(_creditor);
        bool reserve = false;
        bytes memory data = abi.encode(values,receivers,reserve);
        ERC721(counterContract[_counter]).safeTransferFrom(address(this),address(ethosDeck),itemId,data);
        //uint256 id = ethosDeck.itemIdOf(counterContract[_counter]);
    }


    function createContract(uint256 _counter) public{
        contractNft = new ERC721securitization();
        counterContract[_counter]=address(contractNft);
    }


    function tokenizePosition(uint256 _counter, uint256 _amount, address _recipient, string memory _tokenURI) public {
        uint256 itemId =  mint(_counter, _amount, _tokenURI);
        ethereansOsDeck(_counter,itemId,_recipient);
    }


    function createPoolOnUniswap() public {
        //TD IMPLEMENT POOL ON UNISWAP WITH THE SECURITIES
    }
}