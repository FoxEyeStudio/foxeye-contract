// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Ownable} from "./open-zeppelin/Ownable.sol";
import {IERC20} from "./open-zeppelin/IERC20.sol";
import {FoxToken} from "./FoxToken.sol";
import "./open-zeppelin/utils/cryptography/MerkleProof.sol";


contract Airdrop is Ownable {

    uint256 public immutable TOTAL_DEADLINE;
    uint256 public immutable SEASON_DEADLINE;
    bytes32 private constant DEFAULT_ROOT = "0x";
    FoxToken public immutable FOX_TOKEN;

    struct season {
        bytes32 merkleRoot;
        uint256 startBlockTimestamp;
    }
    season[] public seasons;    
    mapping(uint256 => mapping(address => bool)) public isClaimed;

    
    constructor(uint256 totalDeadline, uint256 seasonDeadline, address foxTokenAddress) public {
        TOTAL_DEADLINE = totalDeadline;
        SEASON_DEADLINE = seasonDeadline;
        FOX_TOKEN = FoxToken(foxTokenAddress);
    }

    function claim(uint256 seasonId, uint256 amount, address receiver, bytes32[] calldata proof) external {    
        require(seasonId < seasons.length, "Non-exsitent season");
        require(isSeasonEnded(seasonId), "Ongoing season");
        require(seasons[seasonId].merkleRoot != DEFAULT_ROOT, "Manager hasn't registered airdrop list");
        require(!isClaimed[seasonId][receiver], "Claimed"); 

        bytes32 leaf = bytes32(abi.encode(receiver, amount));       
        require(MerkleProof.verifyCalldata(proof, seasons[seasonId].merkleRoot, leaf), "Invalid merkle proof");
        FOX_TOKEN.airdropMint(receiver, amount);
        isClaimed[seasonId][receiver] = true;
    }

    function startSeason() external onlyOwner {
        if (seasons.length != 0) {
            require(isSeasonEnded(seasons.length - 1));
            require(block.timestamp - seasons[0].startBlockTimestamp <= TOTAL_DEADLINE); // admin can't start new seasons after total deadline
        }        
        season memory newSeason = season(DEFAULT_ROOT, block.timestamp);
        seasons.push(newSeason);
    }

    function airdropRegister(bytes32 merkleRoot) external onlyOwner {
        require(isSeasonEnded(seasons.length - 1), "Ongoing season");
        seasons[seasons.length - 1].merkleRoot = merkleRoot;
    }

    function isSeasonEnded(uint256 seasonId) public view returns(bool) {
        return seasons[seasonId].startBlockTimestamp + block.timestamp >= SEASON_DEADLINE;
    }

}