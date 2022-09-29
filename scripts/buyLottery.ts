import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";


async function main() {
    const dividendsPoolAddr = await readAddr("DividendsPool");
    const dividendsPool = await ethers.getContractAt("DividendsPool", dividendsPoolAddr);  
    const userRandNum = ethers.BigNumber.from(ethers.utils.randomBytes(32));
    await dividendsPool.buyLottery(userRandNum);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

