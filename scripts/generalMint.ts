import { ethers } from "hardhat";
import { readAddr } from "./utils/addressHandler";

async function main() {
  const FoxToken = await readAddr("FoxToken");
  const foxToken = await(ethers.getContractAt("FoxToken", FoxToken));  
  const mintAmount = 10000;
  foxToken.generalMint('0x12C33E63551E9dc8A073edBdeeDf04fC98B944E4',ethers.BigNumber.from(mintAmount).mul(ethers.constants.WeiPerEther));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
