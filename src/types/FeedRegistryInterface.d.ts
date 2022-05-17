/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FeedRegistryInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "confirmFeed(address,address,address)": FunctionFragment;
    "decimals(address,address)": FunctionFragment;
    "description(address,address)": FunctionFragment;
    "getAnswer(address,address,uint256)": FunctionFragment;
    "getCurrentPhaseId(address,address)": FunctionFragment;
    "getFeed(address,address)": FunctionFragment;
    "getNextRoundId(address,address,uint80)": FunctionFragment;
    "getPhase(address,address,uint16)": FunctionFragment;
    "getPhaseFeed(address,address,uint16)": FunctionFragment;
    "getPhaseRange(address,address,uint16)": FunctionFragment;
    "getPreviousRoundId(address,address,uint80)": FunctionFragment;
    "getProposedFeed(address,address)": FunctionFragment;
    "getRoundData(address,address,uint80)": FunctionFragment;
    "getRoundFeed(address,address,uint80)": FunctionFragment;
    "getTimestamp(address,address,uint256)": FunctionFragment;
    "isFeedEnabled(address)": FunctionFragment;
    "latestAnswer(address,address)": FunctionFragment;
    "latestRound(address,address)": FunctionFragment;
    "latestRoundData(address,address)": FunctionFragment;
    "latestTimestamp(address,address)": FunctionFragment;
    "proposeFeed(address,address,address)": FunctionFragment;
    "proposedGetRoundData(address,address,uint80)": FunctionFragment;
    "proposedLatestRoundData(address,address)": FunctionFragment;
    "version(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "confirmFeed",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "decimals",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPhaseId",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextRoundId",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhase",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhaseFeed",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhaseRange",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousRoundId",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposedFeed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundFeed",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFeedEnabled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeFeed",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposedGetRoundData",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposedLatestRoundData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "version",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPhaseId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPhase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPhaseFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPhaseRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposedFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFeedEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposedGetRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposedLatestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "FeedConfirmed(address,address,address,address,uint16,address)": EventFragment;
    "FeedProposed(address,address,address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeedConfirmed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeedProposed"): EventFragment;
}

export type FeedConfirmedEvent = TypedEvent<
  [string, string, string, string, number, string] & {
    asset: string;
    denomination: string;
    latestAggregator: string;
    previousAggregator: string;
    nextPhaseId: number;
    sender: string;
  }
>;

export type FeedProposedEvent = TypedEvent<
  [string, string, string, string, string] & {
    asset: string;
    denomination: string;
    proposedAggregator: string;
    currentAggregator: string;
    sender: string;
  }
>;

export class FeedRegistryInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FeedRegistryInterfaceInterface;

  functions: {
    confirmFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    description(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAnswer(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { answer: BigNumber }>;

    getCurrentPhaseId(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[number] & { currentPhaseId: number }>;

    getFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getNextRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nextRoundId: BigNumber }>;

    getPhase(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, BigNumber, BigNumber] & {
          phaseId: number;
          startingAggregatorRoundId: BigNumber;
          endingAggregatorRoundId: BigNumber;
        }
      ] & {
        phase: [number, BigNumber, BigNumber] & {
          phaseId: number;
          startingAggregatorRoundId: BigNumber;
          endingAggregatorRoundId: BigNumber;
        };
      }
    >;

    getPhaseFeed(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getPhaseRange(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startingRoundId: BigNumber;
        endingRoundId: BigNumber;
      }
    >;

    getPreviousRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { previousRoundId: BigNumber }>;

    getProposedFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[string] & { proposedAggregator: string }>;

    getRoundData(
      base: string,
      quote: string,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getRoundFeed(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getTimestamp(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    isFeedEnabled(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    latestAnswer(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { answer: BigNumber }>;

    latestRound(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { roundId: BigNumber }>;

    latestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestTimestamp(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    proposeFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proposedGetRoundData(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    proposedLatestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    version(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  confirmFeed(
    base: string,
    quote: string,
    aggregator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<number>;

  description(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getAnswer(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentPhaseId(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getFeed(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getNextRoundId(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPhase(
    base: string,
    quote: string,
    phaseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber] & {
      phaseId: number;
      startingAggregatorRoundId: BigNumber;
      endingAggregatorRoundId: BigNumber;
    }
  >;

  getPhaseFeed(
    base: string,
    quote: string,
    phaseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPhaseRange(
    base: string,
    quote: string,
    phaseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      startingRoundId: BigNumber;
      endingRoundId: BigNumber;
    }
  >;

  getPreviousRoundId(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProposedFeed(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoundData(
    base: string,
    quote: string,
    _roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  getRoundFeed(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getTimestamp(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isFeedEnabled(
    aggregator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestAnswer(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestRound(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestRoundData(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  latestTimestamp(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposeFeed(
    base: string,
    quote: string,
    aggregator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proposedGetRoundData(
    base: string,
    quote: string,
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  proposedLatestRoundData(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  version(
    base: string,
    quote: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    confirmFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<number>;

    description(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getAnswer(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPhaseId(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getNextRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhase(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber] & {
        phaseId: number;
        startingAggregatorRoundId: BigNumber;
        endingAggregatorRoundId: BigNumber;
      }
    >;

    getPhaseFeed(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPhaseRange(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startingRoundId: BigNumber;
        endingRoundId: BigNumber;
      }
    >;

    getPreviousRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposedFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoundData(
      base: string,
      quote: string,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getRoundFeed(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTimestamp(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFeedEnabled(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestAnswer(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRound(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestTimestamp(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposeFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    proposedGetRoundData(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    proposedLatestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    version(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "FeedConfirmed(address,address,address,address,uint16,address)"(
      asset?: string | null,
      denomination?: string | null,
      latestAggregator?: string | null,
      previousAggregator?: null,
      nextPhaseId?: null,
      sender?: null
    ): TypedEventFilter<
      [string, string, string, string, number, string],
      {
        asset: string;
        denomination: string;
        latestAggregator: string;
        previousAggregator: string;
        nextPhaseId: number;
        sender: string;
      }
    >;

    FeedConfirmed(
      asset?: string | null,
      denomination?: string | null,
      latestAggregator?: string | null,
      previousAggregator?: null,
      nextPhaseId?: null,
      sender?: null
    ): TypedEventFilter<
      [string, string, string, string, number, string],
      {
        asset: string;
        denomination: string;
        latestAggregator: string;
        previousAggregator: string;
        nextPhaseId: number;
        sender: string;
      }
    >;

    "FeedProposed(address,address,address,address,address)"(
      asset?: string | null,
      denomination?: string | null,
      proposedAggregator?: string | null,
      currentAggregator?: null,
      sender?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        denomination: string;
        proposedAggregator: string;
        currentAggregator: string;
        sender: string;
      }
    >;

    FeedProposed(
      asset?: string | null,
      denomination?: string | null,
      proposedAggregator?: string | null,
      currentAggregator?: null,
      sender?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        denomination: string;
        proposedAggregator: string;
        currentAggregator: string;
        sender: string;
      }
    >;
  };

  estimateGas: {
    confirmFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    description(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAnswer(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPhaseId(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhase(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhaseFeed(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhaseRange(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposedFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      base: string,
      quote: string,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundFeed(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFeedEnabled(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRound(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestTimestamp(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposeFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposedGetRoundData(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposedLatestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    confirmFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    description(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAnswer(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentPhaseId(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhase(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhaseFeed(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhaseRange(
      base: string,
      quote: string,
      phaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreviousRoundId(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposedFeed(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundData(
      base: string,
      quote: string,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundFeed(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFeedEnabled(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswer(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRound(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestTimestamp(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposeFeed(
      base: string,
      quote: string,
      aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposedGetRoundData(
      base: string,
      quote: string,
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposedLatestRoundData(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(
      base: string,
      quote: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
