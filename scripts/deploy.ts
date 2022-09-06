import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const ONE_MONTH_IN_SECS = 30 * 24 * 60 * 60;
  const feeReceiver = '0x6C3F14DA26556585706c02af737a44E67Dc6954D'; // replace this address in production
  const STABLE_COIN_ADDR = '0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad'; // (Rinkeby USDT) replace this address in production


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
  console.log('Update vital addresses completed.');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});