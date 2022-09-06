// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Ownable} from "./open-zeppelin/Ownable.sol";
import {IERC20} from "./open-zeppelin/IERC20.sol";
import {FoxToken} from "./FoxToken.sol";


contract DividendsPool is Ownable {
        
    uint256 public immutable FEE_RATE; // Ad commision fee rate for Fox DAO 
    address public feeReceiver;

    uint256 public immutable LOTTERY_WIN_RATIO; //10
    uint256 public immutable LOTTERY_COST; //30
    uint256 public immutable LOTTERY_REWARD_COEFFICIENT; //100

    FoxToken public immutable FOX_TOKEN;
    IERC20 public immutable STABLE_COIN; // The stable token required by depositing

    struct Lottery { 
        address user;
        uint256 userRandNum;
        uint256 revealedRandNum;
        uint256 rewardAmount;
        uint256 poolSizeSnapshot;
        uint256 foxUserHoldingsSnapshot; 
        uint256 foxSupplySnapshot;
    }
    Lottery[] public lotteries;
    bytes32[] public randNumHashes;
    
    uint256 private adId;

    event depositDone(uint256 indexed adId, address indexed depositor, uint256 amount);
    event lotteryWon(uint256 indexed lotteryId, address indexed winner, uint256 amount);

    constructor(
        address _feeReceiver, 
        uint256 feeRate,
        uint256 lotteryWinRatio,
        uint256 lotteryCost,
        uint256 lotteryRewardCoefficient,
        address foxTokenAddress,
        address stableCoinAddress
        ) public {        
        feeReceiver = _feeReceiver;

        FEE_RATE = feeRate; 

        LOTTERY_WIN_RATIO = lotteryWinRatio;
        LOTTERY_COST = lotteryCost;
        LOTTERY_REWARD_COEFFICIENT = lotteryRewardCoefficient;

        FOX_TOKEN = FoxToken(foxTokenAddress);
        STABLE_COIN = IERC20(stableCoinAddress);

        adId = 0;

        require(LOTTERY_WIN_RATIO <= 100, "Win ratio overflow");
        require(FEE_RATE <= 100, "Fee rate overflow");
    }

    function deposit(uint256 amount) external {    
        uint256 fee = amount * FEE_RATE / 100;
        STABLE_COIN.transferFrom(msg.sender, address(this), amount);
        STABLE_COIN.transfer(feeReceiver, fee);
        adId++;
        emit depositDone(adId, msg.sender, amount);
    }

    function currentPoolSize() public view returns (uint256) {
        return STABLE_COIN.balanceOf(address(this));
    }

    function buyLottery(uint256 userRandNum) external {
        FOX_TOKEN.lotteryBurn(msg.sender, LOTTERY_COST);        

        //Create lottery
        Lottery memory lottery = 
            Lottery(
            msg.sender, 
            userRandNum, 
            0, 
            0, 
            currentPoolSize(), 
            FOX_TOKEN.balanceOf(msg.sender), 
            FOX_TOKEN.totalSupply());
        lotteries.push(lottery);
    }

    function drawLottery(uint32 lotteryId, uint256 preimage) external {
        require(lotteries.length > lotteryId, "Non-existent lottery");
        require(randNumHashes.length >= lotteryId, "Add more randNumHashes first");

        Lottery storage lottery = lotteries[lotteryId];
        require(lottery.rewardAmount == 0, "The lottery has already been drawn");        
        require(keccak256(abi.encode(preimage)) == randNumHashes[lotteryId], "Invalid preimage"); 
        lottery.revealedRandNum = preimage;

        uint256 rewardAmount = _calculateRewardAmount(lottery);
        if (rewardAmount != 0) {
            lottery.rewardAmount = rewardAmount;
            _sendReward(lotteryId, lottery.user, rewardAmount);
        }
    }

    function _sendReward(uint32 lotteryId, address winner, uint256 rewardAmount) internal {
        STABLE_COIN.transfer(winner, rewardAmount);
        emit lotteryWon(lotteryId, winner, rewardAmount);
    }

    function _calculateRewardAmount(Lottery memory lottery) internal view returns(uint256) {
        uint256 composedRandNum = uint256(keccak256(abi.encode(lottery.revealedRandNum + lottery.userRandNum)));
        uint256 rewardAmount = 
            composedRandNum <= ~uint256(0) / 100 * LOTTERY_WIN_RATIO
            ? lottery.foxUserHoldingsSnapshot * lottery.poolSizeSnapshot * LOTTERY_REWARD_COEFFICIENT / lottery.foxSupplySnapshot
            : 0 ;
        if (rewardAmount >= currentPoolSize()) rewardAmount = currentPoolSize();
        return rewardAmount;
    }

    function changeFeeReceiver(address newFeeReceiver) external onlyOwner {
        feeReceiver = newFeeReceiver;
    }
    
    function appendRandNumHash(bytes32[] calldata hashes) external onlyOwner {
        for (uint32 i = 0; i < hashes.length; i++) {
            randNumHashes.push(hashes[i]);
        }
    }

}