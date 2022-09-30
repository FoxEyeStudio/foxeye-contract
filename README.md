# FoxEye
## Start
1. `npm install --save-dev hardhat`
2. `npx hardhat compile`
3. `npx hardhat run --network rinkeby scripts/deploy.ts` or replace the network to Ethereum/BSC/etc.

After deployment, contract addresses of  Airdrop, FoxToken, DividendsPool will be saved to `./record/contract_addr_log.txt` for script usage.

# Overview
## ￼ FoxToken.sol
$FOX main contract. 

## Airdrop.sol
Admin can start airdrop seasons. During the season, all activities related to airdrop will be recorded on a server. At the end of the season, admin will calculate the airdrop amount for every participant and register the merkle root  for airdrop claim. 

### Start Season
Any $FOX airdrop requires starting a season first. A season will end automatically once the timestamp is reached. Thus, no manual termination is needed.
`npx hardhat run --network rinkeby scripts/startSeason.ts`

### Airdrop List
After a season ends, the admin should set the airdrop list to register valid airdrop addresses and their amounts.
Set a list in `./script/utils/merkleHandler.ts` or read it via a file.

Then run `npx hardhat run --network rinkeby scripts/setAirdropMerkle.ts`

### Test a Lucky Draw
For test & debug,  use `./script/resultCaulator.ts` to calculate a lucky number that can win for a lottery(set arguments first). This can be achieved only by the admin who knows those preimages.

## DividendsPool.sol
Advertisers/consumers in the FoxEye ecosystem will deposit to the dividends pool to purchase services. These fees will be distributed via lotteries, which require burning $FOX to buy. Every lottery will be drawn via a fair random system.

### Append Random Hashes
DividendsPool utilises two-rounds interactions to compose a true random number to draw a lottery. Nobody could cheat during this process. 

` composedRandNum = keccak256(abi.encode(lottery.revealedRandNum, lottery.userRandNum)));`

To achieve this goal, a list of predefined random numbers and their hashes must be generated and saved. Hahses will be published on-chain while their preimages remain secret. After a user buys a lottery with his random number, there should be another transaction sent by a human or server bot to reveal the preimage of on-chain hashes.

Run this command:
`npx hardhat run --network rinkeby scripts/AppendHashes.ts`
- There will be a `./record/randoms_log.txt` file containing preimages and hashes. Newly generated numbers won’t cover or occupy the original file, i.e. they just append to the end of the file.
- Hashes will be published to your deployed contract automatically. Once you need to reveal those preimages, find the corresponding one in the `txt` file.
- Modify `BATCH_LENGTH` in `AppendHashes.ts` to adjust how many numbers will be generated and submitted per command.
- - YOU MUST KEEP `randoms_log.txt` SAFE AND SOUND, OR THERE WILL BE NO WAY TO RECOVER / REVEAL PREIMAGES!
### Draw Lotteries
`npx hardhat run --network rinkeby scripts/drawLottery.ts`
Set `currentLotteryId, preimage`first in the .ts file before use.
