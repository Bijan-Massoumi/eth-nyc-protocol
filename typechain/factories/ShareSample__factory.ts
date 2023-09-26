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
import type { ShareSample, ShareSampleInterface } from "../ShareSample";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subscriptionRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientSubscriptionPool",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAlterPriceValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAlterSubscriptionPoolValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAssessmentFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeCollected",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "subscriptionPoolRemaining",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidationStartedAt",
        type: "uint256",
      },
    ],
    name: "FeeCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "subject",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "Trade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyShares",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseSubscriptionPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getBuyPrice",
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
    name: "getCurrentPrice",
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
    name: "getMinimumSubPool",
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
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getSellPrice",
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
    name: "getShareSubject",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getSubscriptionPoolRemaining",
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
    name: "getSupply",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getTaxPrice",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseSubscriptionPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sellShares",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526103e860045561271060055561271060065534801561002257600080fd5b50604051610f55380380610f5583398101604081905261004191610097565b600191909155600b80546001600160a01b039384166001600160a01b031991821617909155600c80549390921692169190911790556100d3565b80516001600160a01b038116811461009257600080fd5b919050565b6000806000606084860312156100ac57600080fd5b6100b58461007b565b9250602084015191506100ca6040850161007b565b90509250925092565b610e73806100e26000396000f3fe6080604052600436106100e85760003560e01c80635cf4ee911161008a578063ba730e5311610059578063ba730e5314610250578063c4d676a1146100ed578063d1a93d1814610270578063eb91d37e1461028357600080fd5b80635cf4ee91146101c55780636c9c2faf146101e557806370a08231146101fa5780637a2578c71461023057600080fd5b806322a295a8116100c657806322a295a8146101565780632db302d31461016a57806344e5ea7b146101925780634ba8ae81146101b257600080fd5b806301814e14146100ed57806308d4db141461010e578063117df08814610141575b600080fd5b3480156100f957600080fd5b5061010c610108366004610d2e565b5050565b005b34801561011a57600080fd5b5061012e610129366004610d50565b610298565b6040519081526020015b60405180910390f35b34801561014d57600080fd5b5061010c6102ac565b34801561016257600080fd5b50600061012e565b34801561017657600080fd5b50600c546040516001600160a01b039091168152602001610138565b34801561019e57600080fd5b5061012e6101ad366004610d50565b6103b1565b61010c6101c0366004610d50565b6103cb565b3480156101d157600080fd5b5061012e6101e0366004610d2e565b610681565b3480156101f157600080fd5b5060095461012e565b34801561020657600080fd5b5061012e610215366004610d69565b6001600160a01b031660009081526008602052604090205490565b34801561023c57600080fd5b5061012e61024b366004610d69565b6107a2565b34801561025c57600080fd5b5061012e61026b366004610d50565b6107df565b61010c61027e366004610d50565b6107f2565b34801561028f57600080fd5b5061012e610a26565b60006102a660095483610681565b92915050565b60006102b7336107a2565b9050600081116103025760405162461bcd60e51b8152602060048201526011602482015270125b9cdd59999a58da595b9d081c1bdbdb607a1b60448201526064015b60405180910390fd5b604051600090339083908381818185875af1925050503d8060008114610344576040519150601f19603f3d011682016040523d82523d6000602084013e610349565b606091505b50509050806103915760405162461bcd60e51b8152602060048201526014602482015273556e61626c6520746f2073656e642066756e647360601b60448201526064016102f9565b505033600090815260208190526040812081815542600190910155600a55565b60006102a6826009546103c49190610daf565b6001610681565b806009541161041c5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f742073656c6c20746865206c61737420736861726500000000000060448201526064016102f9565b600081116104635760405162461bcd60e51b815260206004820152601460248201527343616e6e6f742073656c6c20302073686172657360601b60448201526064016102f9565b600061047c826009546104769190610dc2565b83610681565b336000908152600860205260409020549091508211156104d45760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e742073686172657360681b60448201526064016102f9565b60006104de610a26565b336000818152600860205260408120549293509182916104fe9185610a3a565b909250905061050e338484610ab2565b33600090815260086020526040902054610529908690610dc2565b33600090815260086020526040902055600954610547908690610dc2565b60098190555080600a600082825461055f9190610daf565b9091555050600c546009547ff7dd8a134438de4c59401760e24ef5c6cc9c74583b2b022085697f3021e597689133916001600160a01b0390911690600090899089906105ac908390610dc2565b604080516001600160a01b039788168152959096166020860152921515848601526060840191909152608083015260a082015290519081900360c00190a1604051600090339086908381818185875af1925050503d806000811461062c576040519150601f19603f3d011682016040523d82523d6000602084013e610631565b606091505b50509050806106795760405162461bcd60e51b8152602060048201526014602482015273556e61626c6520746f2073656e642066756e647360601b60448201526064016102f9565b505050505050565b60008083156106dc576006610697600186610dc2565b6106a2906002610dd5565b6106ad906001610daf565b856106b9600182610dc2565b6106c39190610dd5565b6106cd9190610dd5565b6106d79190610dec565b6106df565b60005b90506000841580156106f15750836001145b61076657600684610703600188610dc2565b61070d9190610daf565b610718906002610dd5565b610723906001610daf565b61072d8688610daf565b8661073960018a610dc2565b6107439190610daf565b61074d9190610dd5565b6107579190610dd5565b6107619190610dec565b610769565b60005b905060006107778383610dc2565b9050613e8061078e82670de0b6b3a7640000610dd5565b6107989190610dec565b9695505050505050565b6001600160a01b03811660009081526008602052604081205460095482916107d7918591906107d2906001610681565b610a3a565b509392505050565b60006102a6826009546104769190610dc2565b600081116108385760405162461bcd60e51b815260206004820152601360248201527243616e6e6f742062757920302073686172657360681b60448201526064016102f9565b600061084660095483610681565b9050600061086361085e846009546103c49190610daf565b610bb1565b9050813410156108ae5760405162461bcd60e51b8152602060048201526016602482015275496e75736666696369656e74206e667420707269636560501b60448201526064016102f9565b60006108ba8334610dc2565b336000818152600860205260408120549293509182916108dc916107d2610a26565b909250905060006108ed8385610daf565b90508481116109355760405162461bcd60e51b8152602060048201526014602482015273125b9cdd59999a58da595b9d081c185e5b595b9d60621b60448201526064016102f9565b61094733610941610a26565b83610ab2565b81600a60008282546109599190610daf565b909155505033600090815260086020526040902054610979908890610daf565b33600090815260086020526040902055600954610997908890610daf565b6009819055600c547ff7dd8a134438de4c59401760e24ef5c6cc9c74583b2b022085697f3021e597689133916001600160a01b0316906001908b908b906109df908390610daf565b604080516001600160a01b039788168152959096166020860152921515848601526060840191909152608083015260a082015290519081900360c00190a150505050505050565b6000610a356009546001610681565b905090565b6001600160a01b0383166000908152602081815260408083208151808301909252805480835260019091015492820183905283928391610a7f9189918891908a610bce565b82519091508110610a9757600093509150610aaa9050565b8151610aa4908290610dc2565b93509150505b935093915050565b6001600160a01b038316600090815260208181526040808320848155426001918201819055825160608101845290815292830186815281549284019283526002805492830181559485905292517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace60039092029182015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf830155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad09091015554610b81576000610b90565b600254610b9090600190610dc2565b6001600160a01b039093166000908152600360205260409020929092555050565b600061271060045483610bc49190610dd5565b6102a69190610dec565b6001600160a01b038516600090815260036020526040812054819081908690805b600254811015610cc157600060028281548110610c0e57610c0e610e0e565b9060005260206000209060030201604051806060016040529081600082015481526020016001820154815260200160028201548152505090508381600001511115610cae576000610c6d82602001518684600001518560400151610cf4565b610c77908a610dd5565b9050610c838188610daf565b965089871115610c9c5786975050505050505050610ceb565b81519450610caa8187610daf565b9550505b5080610cb981610e24565b915050610bef565b50610cd0898342600154610cf4565b610cda9087610dd5565b610ce49085610daf565b9450505050505b95945050505050565b6000610d066301e13380612710610dd5565b610d108585610dc2565b610d1a8785610dd5565b610d249190610dd5565b610ceb9190610dec565b60008060408385031215610d4157600080fd5b50508035926020909101359150565b600060208284031215610d6257600080fd5b5035919050565b600060208284031215610d7b57600080fd5b81356001600160a01b0381168114610d9257600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102a6576102a6610d99565b818103818111156102a6576102a6610d99565b80820281158282048414176102a6576102a6610d99565b600082610e0957634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b600060018201610e3657610e36610d99565b506001019056fea2646970667358221220d5d04e35a94721569d424c1ecf9936cfb3c9c08a5b1c3992ea57328a629d1c6964736f6c63430008120033";

type ShareSampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShareSampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShareSample__factory extends ContractFactory {
  constructor(...args: ShareSampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _withdrawAddress: string,
    _subscriptionRate: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ShareSample> {
    return super.deploy(
      _withdrawAddress,
      _subscriptionRate,
      owner,
      overrides || {}
    ) as Promise<ShareSample>;
  }
  override getDeployTransaction(
    _withdrawAddress: string,
    _subscriptionRate: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _withdrawAddress,
      _subscriptionRate,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): ShareSample {
    return super.attach(address) as ShareSample;
  }
  override connect(signer: Signer): ShareSample__factory {
    return super.connect(signer) as ShareSample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShareSampleInterface {
    return new utils.Interface(_abi) as ShareSampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShareSample {
    return new Contract(address, _abi, signerOrProvider) as ShareSample;
  }
}
