/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Airdrop, AirdropInterface } from "../Airdrop";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seasonDeadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "foxTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "FOX_TOKEN",
    outputs: [
      {
        internalType: "contract FoxToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEASON_DEADLINE",
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
  {
    inputs: [],
    name: "TOTAL_DEADLINE",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "airdropRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "seasonId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "seasonId",
        type: "uint256",
      },
    ],
    name: "isSeasonEnded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "seasons",
    outputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "startBlockTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startSeason",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610c21380380610c2183398101604081905261002f916100a2565b61003833610052565b60809290925260a0526001600160a01b031660c0526100e8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000606084860312156100b757600080fd5b83516020850151604086015191945092506001600160a01b03811681146100dd57600080fd5b809150509250925092565b60805160a05160c051610af661012b6000396000818160f301526106d301526000818161013701526102f70152600081816101b0015261037a0152610af66000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063952a963311610081578063d2ef07951161005b578063d2ef0795146101e5578063f2fde38b14610213578063f5d709a11461022657600080fd5b8063952a9633146101a3578063a5cba49d146101ab578063bce9e089146101d257600080fd5b8063715018a6116100b2578063715018a6146101675780637b97dde31461016f5780638da5cb5b1461019257600080fd5b80630fbb54d7146100d9578063317ab7e3146100ee57806332eaf5c914610132575b600080fd5b6100ec6100e736600461097a565b61024e565b005b6101157f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6101597f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610129565b6100ec6102df565b61018261017d36600461097a565b6102f3565b6040519015158152602001610129565b6000546001600160a01b0316610115565b6100ec61034e565b6101597f000000000000000000000000000000000000000000000000000000000000000081565b6100ec6101e03660046109af565b610452565b6101826101f3366004610a46565b600260209081526000928352604080842090915290825290205460ff1681565b6100ec610221366004610a72565b610764565b61023961023436600461097a565b6107f4565b60408051928352602083019190915201610129565b610256610822565b600180546102679161017d91610aa3565b6102a95760405162461bcd60e51b815260206004820152600e60248201526d27b733b7b4b7339039b2b0b9b7b760911b60448201526064015b60405180910390fd5b600180548291906102bb908290610aa3565b815481106102cb576102cb610aba565b600091825260209091206002909102015550565b6102e7610822565b6102f1600061087c565b565b60007f00000000000000000000000000000000000000000000000000000000000000006001838154811061032957610329610aba565b906000526020600020906002020160010154426103469190610aa3565b101592915050565b610356610822565b600154156103d5576001805461036f9161017d91610aa3565b61037857600080fd5b7f000000000000000000000000000000000000000000000000000000000000000060016000815481106103ad576103ad610aba565b906000526020600020906002020160010154426103ca9190610aa3565b11156103d557600080fd5b6040805180820190915261060f60f31b8152426020820190815260018054808201825560009190915291517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600290930292830155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf790910155565b60015485106104a35760405162461bcd60e51b815260206004820152601360248201527f4e6f6e2d6578736974656e7420736561736f6e0000000000000000000000000060448201526064016102a0565b6104ac856102f3565b6104e95760405162461bcd60e51b815260206004820152600e60248201526d27b733b7b4b7339039b2b0b9b7b760911b60448201526064016102a0565b61060f60f31b6001868154811061050257610502610aba565b906000526020600020906002020160000154036105875760405162461bcd60e51b815260206004820152602660248201527f4d616e61676572206861736e277420726567697374657265642061697264726f60448201527f70206c697374000000000000000000000000000000000000000000000000000060648201526084016102a0565b60008581526002602090815260408083206001600160a01b038716845290915290205460ff16156105fa5760405162461bcd60e51b815260206004820152600760248201527f436c61696d65640000000000000000000000000000000000000000000000000060448201526064016102a0565b604080516001600160a01b038516602082015290810185905260009060600160405160208183030381529060405280519060200120905061066183836001898154811061064957610649610aba565b906000526020600020906002020160000154846108e4565b6106ad5760405162461bcd60e51b815260206004820152601460248201527f496e76616c6964206d65726b6c652070726f6f6600000000000000000000000060448201526064016102a0565b60405163022ad06760e41b81526001600160a01b038581166004830152602482018790527f000000000000000000000000000000000000000000000000000000000000000016906322ad067090604401600060405180830381600087803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b505050600096875250506002602090815260408087206001600160a01b0390951687529390525050909120805460ff1916600117905550565b61076c610822565b6001600160a01b0381166107e85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102a0565b6107f18161087c565b50565b6001818154811061080457600080fd5b60009182526020909120600290910201805460019091015490915082565b6000546001600160a01b031633146102f15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a0565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000826108f28686856108fc565b1495945050505050565b600081815b8481101561093f5761092b8287878481811061091f5761091f610aba565b90506020020135610948565b91508061093781610ad0565b915050610901565b50949350505050565b6000818310610964576000828152602084905260409020610973565b60008381526020839052604090205b9392505050565b60006020828403121561098c57600080fd5b5035919050565b80356001600160a01b03811681146109aa57600080fd5b919050565b6000806000806000608086880312156109c757600080fd5b85359450602086013593506109de60408701610993565b9250606086013567ffffffffffffffff808211156109fb57600080fd5b818801915088601f830112610a0f57600080fd5b813581811115610a1e57600080fd5b8960208260051b8501011115610a3357600080fd5b9699959850939650602001949392505050565b60008060408385031215610a5957600080fd5b82359150610a6960208401610993565b90509250929050565b600060208284031215610a8457600080fd5b61097382610993565b634e487b7160e01b600052601160045260246000fd5b600082821015610ab557610ab5610a8d565b500390565b634e487b7160e01b600052603260045260246000fd5b600060018201610ae257610ae2610a8d565b506001019056fea164736f6c634300080f000a";

type AirdropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Airdrop__factory extends ContractFactory {
  constructor(...args: AirdropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    totalDeadline: PromiseOrValue<BigNumberish>,
    seasonDeadline: PromiseOrValue<BigNumberish>,
    foxTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Airdrop> {
    return super.deploy(
      totalDeadline,
      seasonDeadline,
      foxTokenAddress,
      overrides || {}
    ) as Promise<Airdrop>;
  }
  override getDeployTransaction(
    totalDeadline: PromiseOrValue<BigNumberish>,
    seasonDeadline: PromiseOrValue<BigNumberish>,
    foxTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      totalDeadline,
      seasonDeadline,
      foxTokenAddress,
      overrides || {}
    );
  }
  override attach(address: string): Airdrop {
    return super.attach(address) as Airdrop;
  }
  override connect(signer: Signer): Airdrop__factory {
    return super.connect(signer) as Airdrop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropInterface {
    return new utils.Interface(_abi) as AirdropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Airdrop {
    return new Contract(address, _abi, signerOrProvider) as Airdrop;
  }
}
