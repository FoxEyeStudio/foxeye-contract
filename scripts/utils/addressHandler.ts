import { ethers } from "hardhat";
import * as fs from "fs-extra";
import * as path from "path";
const OUT_DIR = path.resolve(`$(__dirname)`,'../record/');
const FILE_NAME = 'contract_addr_log.txt';
const ADDR_LOG_PATH = OUT_DIR + "/" + FILE_NAME;

export async function readAddr(contract: string) {
    const rawData = await fs.readFile(ADDR_LOG_PATH); 
    const data = JSON.parse(rawData.toString());
    const ret = data[contract];
    console.log("Address feteched:",contract, "@", ret);
    return ret;  
}

export async function writeAddr(airdrop: string, foxToken: string, dividendsPool: string) {

    const addrList =     
    {
        "Airdrop": airdrop,
        "FoxToken": foxToken,
        "DividendsPool": dividendsPool
    };

    await fs.createFile(ADDR_LOG_PATH);
    await fs.writeFile(ADDR_LOG_PATH, JSON.stringify(addrList));
    console.log("Contract addrs saved to ",ADDR_LOG_PATH);
}

