import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";

async function main() {
  const dividendsPoolAddr = await readAddr("DividendsPool");
  const dividendsPool = await(ethers.getContractAt("DividendsPool", dividendsPoolAddr));    
  await dividendsPool.deposit(ethers.BigNumber.from(100).mul(ethers.constants.WeiPerEther));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
