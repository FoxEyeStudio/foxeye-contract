import { ethers } from "hardhat";
import { writeAddr } from "./utils/addressHandler";


async function main() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_MONTH_IN_SECS = 30 * 24 * 60 * 60;
    const feeReceiver = '0x12C33E63551E9dc8A073edBdeeDf04fC98B944E4'; // replace this address in production
    const STABLE_COIN_ADDR = '0x47c4845d5E43507638Acd5553EE42132175D5656'; // Rinkeby test USDT
    // const STABLE_COIN_ADDR = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'; // BUSD on BSC


    const FoxToken = await ethers.getContractFactory("FoxToken");
    const foxToken = await FoxToken.deploy();
    await foxToken.deployed();
    console.log(`FoxToken deployed to ${foxToken.address}`);

    const DividendsPool = await ethers.getContractFactory("DividendsPool");
    const dividendsPool = await DividendsPool.deploy(feeReceiver,20, 10 ,30 ,100 ,foxToken.address ,STABLE_COIN_ADDR);
    await dividendsPool.deployed();
    console.log(`DividendsPool deployed to ${dividendsPool.address}`);

    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(ONE_YEAR_IN_SECS, 3 * ONE_MONTH_IN_SECS ,foxToken.address);
    await airdrop.deployed();
    console.log(`Airdrop deployed to ${airdrop.address}`);

    await foxToken.updateVitalAddresses(airdrop.address, dividendsPool.address);
    console.log('Update vital addresses completed');
    
    writeAddr(airdrop.address, foxToken.address, dividendsPool.address);  
}

// We recommend this pattern to be able to use async/await eve3rywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
