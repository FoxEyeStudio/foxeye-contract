import { ethers } from "hardhat";
import * as fs from "fs-extra";
import * as path from "path";
import { readAddr } from "./utils/addressHandler";

type pair = {preimage: string; hash: string;};
const BATCH_LENGTH = 5; //use 100 in production
const OUT_DIR = path.resolve(`$(__dirname)`,'../record/');
const RANDOMS_LOG = 'randoms_log.txt';

async function main() {
    const dividendsPoolAddr = await readAddr("DividendsPool");
    const dividendsPool = await ethers.getContractAt("DividendsPool", dividendsPoolAddr);  

    const pairs: pair[] = generateRandom();
    let hashes: string[] = new Array<string>();
    for(let i=0; i<pairs.length; i++){
        hashes.push(pairs[i].hash);
    }
    
    await dividendsPool.appendRandNumHash(hashes);
    saveRandomsToLocal(pairs);
}

function generateRandom():pair[] {    
    
    let pairs: pair[] = new Array<pair>();
    for(let i = 0; i < BATCH_LENGTH; i++) {
        const preimage = ethers.BigNumber.from(ethers.utils.randomBytes(32));
        const hash = ethers.utils.keccak256(ethers.utils.hexZeroPad(preimage.toHexString(), 32));
        const pair: pair = {preimage: preimage.toString(), hash: hash};
        pairs.push(pair);
    }
    return pairs;
}

async function saveRandomsToLocal(pairs: pair[]) {
    const randomsLogPath: string = OUT_DIR + "/" + RANDOMS_LOG;

    if (!await fs.pathExists(randomsLogPath)) {
        await fs.createFile(randomsLogPath);
    }

    let readDataRaw = await fs.readFile(randomsLogPath);    
    let readData, saveData;

    try{ readData = JSON.parse(readDataRaw.toString()); } catch (e) {}

    if (readData) {
        let newPairs: pair[] = new Array<pair>();
        for(let i = 0; i < readData.length; i++) {
            newPairs.push(readData[i]);
        }
        for(let i = 0; i < pairs.length; i++) {
            newPairs.push(pairs[i]);
        }
        saveData = JSON.stringify(newPairs);         
    } else {
        saveData = JSON.stringify(pairs);
    }
    
    await fs.writeFile(randomsLogPath, saveData);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

