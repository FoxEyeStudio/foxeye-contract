import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";

async function main() {
    const dividendsPoolAddr = await readAddr("DividendsPool");
    const dividendsPool = await ethers.getContractAt("DividendsPool", dividendsPoolAddr);      
    await dividendsPool.drawLottery(3,54669971030992157584058707688958664033881473739208873550693950206563790591199n);//(currentLotteryId, preimage)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

