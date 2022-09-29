/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FoxToken, FoxTokenInterface } from "../FoxToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
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
    name: "airdropContract",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "airdropMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dividendsPool",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "generalMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "lotteryBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_airdropContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dividendsPool",
        type: "address",
      },
    ],
    name: "updateVitalAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020016b2337bc22bcb2902a37b5b2b760a11b8152506040518060400160405280600381526020016208c9eb60eb1b815250816003908162000064919062000191565b50600462000073828262000191565b505050620000906200008a6200009660201b60201c565b6200009a565b6200025d565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011757607f821691505b6020821081036200013857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018c57600081815260208120601f850160051c81016020861015620001675750805b601f850160051c820191505b81811015620001885782815560010162000173565b5050505b505050565b81516001600160401b03811115620001ad57620001ad620000ec565b620001c581620001be845462000102565b846200013e565b602080601f831160018114620001fd5760008415620001e45750858301515b600019600386901b1c1916600185901b17855562000188565b600085815260208120601f198616915b828110156200022e578886015182559484019460019091019084016200020d565b50858210156200024d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610f7b806200026d6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806370a08231116100d85780639dc265a61161008c578063ab2be72611610066578063ab2be726146102ff578063dd62ed3e14610312578063f2fde38b1461034b57600080fd5b80639dc265a6146102c6578063a457c2d7146102d9578063a9059cbb146102ec57600080fd5b806382562ba3116100bd57806382562ba31461029a5780638da5cb5b146102ad57806395d89b41146102be57600080fd5b806370a0823114610269578063715018a61461029257600080fd5b806322ad06701161012f578063313ce56711610114578063313ce5671461023557806332cb6b0c14610244578063395093511461025657600080fd5b806322ad06701461020f57806323b872dd1461022257600080fd5b80630eb3a15b116101605780630eb3a15b146101bd578063165dbc78146101d257806318160ddd146101fd57600080fd5b806306fdde031461017c578063095ea7b31461019a575b600080fd5b61018461035e565b6040516101919190610de2565b60405180910390f35b6101ad6101a8366004610e53565b6103f0565b6040519015158152602001610191565b6101d06101cb366004610e53565b610408565b005b6007546101e5906001600160a01b031681565b6040516001600160a01b039091168152602001610191565b6002545b604051908152602001610191565b6101d061021d366004610e53565b61041e565b6101ad610230366004610e7d565b6104a3565b60405160128152602001610191565b6102016a52b7d2dcc80cd2e400000081565b6101ad610264366004610e53565b6104c7565b610201610277366004610eb9565b6001600160a01b031660009081526020819052604090205490565b6101d0610506565b6101d06102a8366004610edb565b61051a565b6005546001600160a01b03166101e5565b61018461055d565b6101d06102d4366004610e53565b61056c565b6101ad6102e7366004610e53565b6105f6565b6101ad6102fa366004610e53565b6106a0565b6006546101e5906001600160a01b031681565b610201610320366004610edb565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101d0610359366004610eb9565b6106ae565b60606003805461036d90610f0e565b80601f016020809104026020016040519081016040528092919081815260200182805461039990610f0e565b80156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b5050505050905090565b6000336103fe81858561073e565b5060019392505050565b610410610863565b61041a82826108bd565b5050565b6006546001600160a01b031633146104105760405162461bcd60e51b815260206004820152602f60248201527f41697264726f70206d75737420626520696e697469617465642066726f6d204160448201527f697264726f7020436f6e7472616374000000000000000000000000000000000060648201526084015b60405180910390fd5b6000336104b1858285610935565b6104bc8585856109c7565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906103fe9082908690610501908790610f48565b61073e565b61050e610863565b6105186000610b9a565b565b610522610863565b600680546001600160a01b0393841673ffffffffffffffffffffffffffffffffffffffff199182161790915560078054929093169116179055565b60606004805461036d90610f0e565b6007546001600160a01b031633146105ec5760405162461bcd60e51b815260206004820152603260248201527f4c6f7474657279206275726e206d75737420626520696e69746961746564206660448201527f726f6d204469766964656e647320506f6f6c0000000000000000000000000000606482015260840161049a565b61041a8282610bf9565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106935760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161049a565b6104bc828686840361073e565b6000336103fe8185856109c7565b6106b6610863565b6001600160a01b0381166107325760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161049a565b61073b81610b9a565b50565b6001600160a01b0383166107a05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161049a565b6001600160a01b0382166108015760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161049a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6005546001600160a01b031633146105185760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049a565b6a52b7d2dcc80cd2e4000000816108d360025490565b6108dd9190610f48565b111561092b5760405162461bcd60e51b815260206004820152601d60248201527f4d696e742063616e6e6f7420657863656564204d41585f535550504c59000000604482015260640161049a565b61041a8282610d23565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146109c157818110156109b45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161049a565b6109c1848484840361073e565b50505050565b6001600160a01b038316610a435760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161049a565b6001600160a01b038216610aa55760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161049a565b6001600160a01b03831660009081526020819052604090205481811015610b345760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161049a565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36109c1565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610c595760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161049a565b6001600160a01b03821660009081526020819052604090205481811015610ccd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161049a565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610856565b6001600160a01b038216610d795760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161049a565b8060026000828254610d8b9190610f48565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b81811015610e0f57858101830151858201604001528201610df3565b81811115610e21576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610e4e57600080fd5b919050565b60008060408385031215610e6657600080fd5b610e6f83610e37565b946020939093013593505050565b600080600060608486031215610e9257600080fd5b610e9b84610e37565b9250610ea960208501610e37565b9150604084013590509250925092565b600060208284031215610ecb57600080fd5b610ed482610e37565b9392505050565b60008060408385031215610eee57600080fd5b610ef783610e37565b9150610f0560208401610e37565b90509250929050565b600181811c90821680610f2257607f821691505b602082108103610f4257634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610f6957634e487b7160e01b600052601160045260246000fd5b50019056fea164736f6c634300080f000a";

type FoxTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FoxTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FoxToken__factory extends ContractFactory {
  constructor(...args: FoxTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FoxToken> {
    return super.deploy(overrides || {}) as Promise<FoxToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FoxToken {
    return super.attach(address) as FoxToken;
  }
  override connect(signer: Signer): FoxToken__factory {
    return super.connect(signer) as FoxToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FoxTokenInterface {
    return new utils.Interface(_abi) as FoxTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FoxToken {
    return new Contract(address, _abi, signerOrProvider) as FoxToken;
  }
}
