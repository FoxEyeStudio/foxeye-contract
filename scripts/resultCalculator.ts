import { BigNumber } from "ethers";
import { ethers } from "hardhat";

const LOTTERY_WIN_RATIO = 10;
const PREIMAGE = 107158131477451949466586438456447353823755020044071558006586217389785117675745n;

/*
This calculator finds a userRandNum that can win a lottery.
You must be the admin who set those hashes so that you know the hash before its preimage is revealed.
Set PREIMAGE before use.
*/

async function main() {
    const abiCoder = new ethers.utils.AbiCoder;

    while (true) {
        const userRandNum = ethers.BigNumber.from(ethers.utils.randomBytes(32));
        const sum = abiCoder.encode(["uint256","uint256"],[PREIMAGE,userRandNum]);
        const composedRandNum = ethers.utils.keccak256(sum);

        const rewardAmount = 
            ethers.BigNumber.from(composedRandNum).lte(ethers.constants.MaxUint256.div(100).mul(LOTTERY_WIN_RATIO))
            ? 1 
            : 0 ;
        
        console.log('\nuserRandNum = ',userRandNum);
        console.log('composedRandNum = ',composedRandNum);
        console.log(rewardAmount);

        if (rewardAmount == 1) break;        
    }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

