import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";
import {constants} from "ethers";
import { getProof, makeLeaf, makeTree, getRoot } from "./utils/merkelHandler";


async function main() {
    const airdropAddr = await readAddr("Airdrop");
    const Airdrop = await ethers.getContractAt("Airdrop", airdropAddr);  
    await Airdrop.airdropRegister(getRoot(makeTree()));
    console.log(await Airdrop.seasons(0));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

