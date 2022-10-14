import { ethers } from "hardhat";
import { writeAddr } from "./utils/addressHandler";


async function main() {
    const TOTAL_DEADLINE = 365 * 24 * 60 * 60; //ONE_YEAR_IN_SECS
    // const SEASON_DURATION = 15 * 24 * 60 * 60; // half a month
    const TEST_SEASON_DURATION = 30 * 60; // half an hour
    const feeReceiver = '0x12C33E63551E9dc8A073edBdeeDf04fC98B944E4'; // replace this address in production
    
    // const STABLE_COIN_ADDR = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'; // BUSD on BSC
    const fUSD_COIN_ADDR = '0x620553CcB76f665F036659654fa4c692aA108E95'; // test USD on BSC
    
    
    const LOTTERY_FEE = ethers.BigNumber.from(30).mul(ethers.constants.WeiPerEther);


    const FoxToken = await ethers.getContractFactory("FoxToken");
    const foxToken = await FoxToken.deploy();
    await foxToken.deployed();
    console.log(`FoxToken deployed to ${foxToken.address}`);

    const DividendsPool = await ethers.getContractFactory("DividendsPool");
    const dividendsPool = await DividendsPool.deploy(feeReceiver,20, 10 ,LOTTERY_FEE ,100 ,foxToken.address ,fUSD_COIN_ADDR);
    await dividendsPool.deployed();
    console.log(`DividendsPool deployed to ${dividendsPool.address}`);

    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(TOTAL_DEADLINE, TEST_SEASON_DURATION ,foxToken.address);
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
