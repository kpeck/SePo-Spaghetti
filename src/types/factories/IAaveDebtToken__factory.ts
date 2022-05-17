/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAaveDebtToken,
  IAaveDebtTokenInterface,
} from "../IAaveDebtToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "toUser",
        type: "address",
      },
    ],
    name: "borrowAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IAaveDebtToken__factory {
  static readonly abi = _abi;
  static createInterface(): IAaveDebtTokenInterface {
    return new utils.Interface(_abi) as IAaveDebtTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveDebtToken {
    return new Contract(address, _abi, signerOrProvider) as IAaveDebtToken;
  }
}
