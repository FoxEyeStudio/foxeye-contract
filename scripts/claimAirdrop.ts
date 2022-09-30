import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";
import { constants } from "ethers";
import { getProof, makeLeaf, makeTree, getRoot } from "./utils/merkelHandler";

async function main() {
    const airdropAddr = await readAddr("Airdrop");
    const Airdrop = await ethers.getContractAt("Airdrop", airdropAddr);  

    const seasonId = 0;
    const amount = 500;
    const amountInWei = ethers.constants.WeiPerEther.mul(amount)
    const receiver = '0x75ac2b5510f24450d0E8148a5bD1F005d0aBd189';
    const proof = getProof(receiver, amount, makeTree());
    console.log('sesasons[0] = ', await Airdrop.seasons(seasonId));

    await Airdrop.claim(seasonId, amountInWei, receiver, proof);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

