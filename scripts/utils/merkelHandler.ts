import { MerkleTree } from "merkletreejs";
import { ethers } from "hardhat";


const abiCoder = new ethers.utils.AbiCoder;
type userInfo = {receiver: string; amount: number;};

export const airdropList: userInfo[] = [
    {receiver: '0x22bfC0f1AAeB4B974D6D05A95ABf35a6511a9146', amount: 555},
    {receiver: '0x602b2c72a89a1c80dba2198c9dc472012c733e89', amount: 32},
    {receiver: '0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5', amount: 343},
    {receiver: '0xBfB4F80AD93c8CE9285D204c5f09f32Bd4075CB5', amount: 3438},
    {receiver: '0x5564886ca2C518d1964E5FCea4f423b41Db9F561', amount: 3324},
    {receiver: '0x356d7c7c81A436AACd62E553eB4911337BB46EDa', amount: 312},
    {receiver: '0x75ac2b5510f24450d0E8148a5bD1F005d0aBd189', amount: 500},
    {receiver: '0x12C33E63551E9dc8A073edBdeeDf04fC98B944E4', amount: 30000},
]

let leafNodes: string[] = new Array<string>();    

airdropList.forEach(userInfo => {
    leafNodes.push(makeLeaf(userInfo.receiver, userInfo.amount));
});

export function getProof(receiver: string, amount: number, merkleTree: MerkleTree): string[] {
    const proof = merkleTree.getHexProof(makeLeaf(receiver, amount));
    console.log('proof = ', proof);    
    return proof;
}

export function makeLeaf(receiver: string, amount: number): string {    
    const leaf = ethers.utils.keccak256(abiCoder.encode(["address","uint256"],[receiver, ethers.constants.WeiPerEther.mul(amount)]));
    console.log('leaf = ', leaf);    
    return leaf;
}

export function makeTree(): MerkleTree {
    const merkleTree = new MerkleTree(leafNodes, ethers.utils.keccak256, {sortLeaves:false, sortPairs: true, hashLeaves:false});
    console.log('merkleTree = \n', merkleTree.toString());    
    return merkleTree;
}

export function getRoot(merkleTree: MerkleTree): string {
    const root = merkleTree.getHexRoot();
    console.log('root = ', root);    
    return root;
}