# FoxEye

1. `npm install --save-dev hardhat`
2. `npx hardhat compile`
3. `npx hardhat run --network rinkeby scripts/deploy.ts`

# Append random hashes
`npx hardhat run --network rinkeby scripts/AppendHashes.ts`
- There will be a `randoms_log.txt` file, containing preimages and hashes , in the `./record` folder.
Only hashes will be pubished online. Once you need to reveal those preimages, find corresponding one in the txt file.
- YOU MUST KEEP `randoms_log.txt` SAFE AND SOUND, OR THERE WILL BE NO WAY TO RECOVER/REVEAL PREIMAGES!

