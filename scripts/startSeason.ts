import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";


async function main() {
    const airdropAddr = await readAddr("Airdrop");
    const Airdrop = await ethers.getContractAt("Airdrop", airdropAddr);  
    await Airdrop.startSeason();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

