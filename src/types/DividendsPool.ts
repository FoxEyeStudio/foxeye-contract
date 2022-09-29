/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface DividendsPoolInterface extends utils.Interface {
  functions: {
    "FEE_RATE()": FunctionFragment;
    "FOX_TOKEN()": FunctionFragment;
    "LOTTERY_COST()": FunctionFragment;
    "LOTTERY_REWARD_COEFFICIENT()": FunctionFragment;
    "LOTTERY_WIN_RATIO()": FunctionFragment;
    "STABLE_COIN()": FunctionFragment;
    "appendRandNumHash(bytes32[])": FunctionFragment;
    "buyLottery(uint256)": FunctionFragment;
    "calculateRewardAmount(uint256,uint256,uint256,uint256)": FunctionFragment;
    "changeFeeReceiver(address)": FunctionFragment;
    "currentPoolSize()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "drawLotteries(uint32[],uint256[])": FunctionFragment;
    "drawLottery(uint32,uint256)": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "lotteries(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "randNumHashes(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEE_RATE"
      | "FOX_TOKEN"
      | "LOTTERY_COST"
      | "LOTTERY_REWARD_COEFFICIENT"
      | "LOTTERY_WIN_RATIO"
      | "STABLE_COIN"
      | "appendRandNumHash"
      | "buyLottery"
      | "calculateRewardAmount"
      | "changeFeeReceiver"
      | "currentPoolSize"
      | "deposit"
      | "drawLotteries"
      | "drawLottery"
      | "feeReceiver"
      | "lotteries"
      | "owner"
      | "randNumHashes"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "FEE_RATE", values?: undefined): string;
  encodeFunctionData(functionFragment: "FOX_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_COST",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_REWARD_COEFFICIENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_WIN_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STABLE_COIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "appendRandNumHash",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buyLottery",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardAmount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeReceiver",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentPoolSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "drawLotteries",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "drawLottery",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteries",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randNumHashes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "FEE_RATE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FOX_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_COST",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_REWARD_COEFFICIENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_WIN_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STABLE_COIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "appendRandNumHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyLottery", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPoolSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "drawLotteries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "drawLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lotteries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randNumHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "depositDone(uint256,address,uint256)": EventFragment;
    "lotteryWon(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "depositDone"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "lotteryWon"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface depositDoneEventObject {
  adId: BigNumber;
  depositor: string;
  amount: BigNumber;
}
export type depositDoneEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  depositDoneEventObject
>;

export type depositDoneEventFilter = TypedEventFilter<depositDoneEvent>;

export interface lotteryWonEventObject {
  lotteryId: BigNumber;
  winner: string;
  amount: BigNumber;
}
export type lotteryWonEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  lotteryWonEventObject
>;

export type lotteryWonEventFilter = TypedEventFilter<lotteryWonEvent>;

export interface DividendsPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DividendsPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FEE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    FOX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    LOTTERY_COST(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOTTERY_REWARD_COEFFICIENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOTTERY_WIN_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    STABLE_COIN(overrides?: CallOverrides): Promise<[string]>;

    appendRandNumHash(
      hashes: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyLottery(
      userRandNum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calculateRewardAmount(
      foxHoldings: PromiseOrValue<BigNumberish>,
      poolSize: PromiseOrValue<BigNumberish>,
      foxSupply: PromiseOrValue<BigNumberish>,
      coefficient: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    changeFeeReceiver(
      newFeeReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentPoolSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    drawLotteries(
      lotteryIds: PromiseOrValue<BigNumberish>[],
      preimages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    drawLottery(
      lotteryId: PromiseOrValue<BigNumberish>,
      preimage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        userRandNum: BigNumber;
        revealedRandNum: BigNumber;
        rewardAmount: BigNumber;
        poolSizeSnapshot: BigNumber;
        foxUserHoldingsSnapshot: BigNumber;
        foxSupplySnapshot: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    randNumHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  FOX_TOKEN(overrides?: CallOverrides): Promise<string>;

  LOTTERY_COST(overrides?: CallOverrides): Promise<BigNumber>;

  LOTTERY_REWARD_COEFFICIENT(overrides?: CallOverrides): Promise<BigNumber>;

  LOTTERY_WIN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  STABLE_COIN(overrides?: CallOverrides): Promise<string>;

  appendRandNumHash(
    hashes: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyLottery(
    userRandNum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calculateRewardAmount(
    foxHoldings: PromiseOrValue<BigNumberish>,
    poolSize: PromiseOrValue<BigNumberish>,
    foxSupply: PromiseOrValue<BigNumberish>,
    coefficient: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeFeeReceiver(
    newFeeReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentPoolSize(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  drawLotteries(
    lotteryIds: PromiseOrValue<BigNumberish>[],
    preimages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  drawLottery(
    lotteryId: PromiseOrValue<BigNumberish>,
    preimage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  lotteries(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      user: string;
      userRandNum: BigNumber;
      revealedRandNum: BigNumber;
      rewardAmount: BigNumber;
      poolSizeSnapshot: BigNumber;
      foxUserHoldingsSnapshot: BigNumber;
      foxSupplySnapshot: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  randNumHashes(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    FOX_TOKEN(overrides?: CallOverrides): Promise<string>;

    LOTTERY_COST(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_REWARD_COEFFICIENT(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_WIN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    STABLE_COIN(overrides?: CallOverrides): Promise<string>;

    appendRandNumHash(
      hashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    buyLottery(
      userRandNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateRewardAmount(
      foxHoldings: PromiseOrValue<BigNumberish>,
      poolSize: PromiseOrValue<BigNumberish>,
      foxSupply: PromiseOrValue<BigNumberish>,
      coefficient: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeeReceiver(
      newFeeReceiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentPoolSize(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    drawLotteries(
      lotteryIds: PromiseOrValue<BigNumberish>[],
      preimages: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    drawLottery(
      lotteryId: PromiseOrValue<BigNumberish>,
      preimage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        userRandNum: BigNumber;
        revealedRandNum: BigNumber;
        rewardAmount: BigNumber;
        poolSizeSnapshot: BigNumber;
        foxUserHoldingsSnapshot: BigNumber;
        foxSupplySnapshot: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    randNumHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "depositDone(uint256,address,uint256)"(
      adId?: PromiseOrValue<BigNumberish> | null,
      depositor?: PromiseOrValue<string> | null,
      amount?: null
    ): depositDoneEventFilter;
    depositDone(
      adId?: PromiseOrValue<BigNumberish> | null,
      depositor?: PromiseOrValue<string> | null,
      amount?: null
    ): depositDoneEventFilter;

    "lotteryWon(uint256,address,uint256)"(
      lotteryId?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null,
      amount?: null
    ): lotteryWonEventFilter;
    lotteryWon(
      lotteryId?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null,
      amount?: null
    ): lotteryWonEventFilter;
  };

  estimateGas: {
    FEE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    FOX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_COST(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_REWARD_COEFFICIENT(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_WIN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    STABLE_COIN(overrides?: CallOverrides): Promise<BigNumber>;

    appendRandNumHash(
      hashes: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyLottery(
      userRandNum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    calculateRewardAmount(
      foxHoldings: PromiseOrValue<BigNumberish>,
      poolSize: PromiseOrValue<BigNumberish>,
      foxSupply: PromiseOrValue<BigNumberish>,
      coefficient: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeeReceiver(
      newFeeReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentPoolSize(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    drawLotteries(
      lotteryIds: PromiseOrValue<BigNumberish>[],
      preimages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    drawLottery(
      lotteryId: PromiseOrValue<BigNumberish>,
      preimage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    randNumHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FOX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOTTERY_COST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOTTERY_REWARD_COEFFICIENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LOTTERY_WIN_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STABLE_COIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    appendRandNumHash(
      hashes: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyLottery(
      userRandNum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calculateRewardAmount(
      foxHoldings: PromiseOrValue<BigNumberish>,
      poolSize: PromiseOrValue<BigNumberish>,
      foxSupply: PromiseOrValue<BigNumberish>,
      coefficient: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeFeeReceiver(
      newFeeReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentPoolSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    drawLotteries(
      lotteryIds: PromiseOrValue<BigNumberish>[],
      preimages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    drawLottery(
      lotteryId: PromiseOrValue<BigNumberish>,
      preimage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randNumHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
