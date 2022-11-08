// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Ownable} from "./open-zeppelin/Ownable.sol";
import {IERC20} from "./open-zeppelin/IERC20.sol";
import {FoxToken} from "./FoxToken.sol";



contract DividendsPool is Ownable {
        
    uint256 public immutable FEE_RATE; // Ad commision fee rate for Fox DAO ,20
    address public feeReceiver;

    uint256 public immutable LOTTERY_WIN_RATIO; //10
    uint256 public immutable LOTTERY_COST; //30
    uint256 public immutable LOTTERY_REWARD_COEFFICIENT; //100
    uint256 private constant MAX_REWARD_RATIO = 5;//reciprocal

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
        bool isDrawn;
    }
    Lottery[] public lotteries;
    bytes32[] public randNumHashes;
    
    uint256 private adId;

    event DepositDone(uint256 indexed adId, address indexed depositor, uint256 amount);
    event LotteryWon(uint256 indexed lotteryId, address indexed winner, uint256 amount);
    event LotteryBought(uint256 indexed lotteryId, address indexed buyer);

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
        emit DepositDone(adId, msg.sender, amount);
    }

    function currentPoolSize() public view returns (uint256) {
        return STABLE_COIN.balanceOf(address(this));
    }

    function buyLottery(uint256 userRandNum) external {
        require(randNumHashes.length > lotteries.length, "Pls wait for admin add more hashes");

        //Create lottery
        Lottery memory lottery = 
            Lottery(
            msg.sender, 
            userRandNum, 
            0, 
            0, 
            currentPoolSize(), 
            FOX_TOKEN.balanceOf(msg.sender), 
            FOX_TOKEN.totalSupply(),
            false);
        lotteries.push(lottery);

        FOX_TOKEN.lotteryBurn(msg.sender, LOTTERY_COST);        
        emit LotteryBought(lotteries.length - 1, msg.sender);
    }

    function drawLottery(uint32 lotteryId, uint256 preimage) public {
        require(lotteries.length > lotteryId, "Non-existent lottery");
        require(randNumHashes.length >= lotteryId, "Add more randNumHashes first");

        Lottery storage lottery = lotteries[lotteryId];
        require(!lottery.isDrawn, "The lottery has already been drawn");  
        require(keccak256(abi.encode(preimage)) == randNumHashes[lotteryId], "Invalid preimage"); 
        lottery.revealedRandNum = preimage;

        uint256 rewardAmount = _evaluateReward(lottery);
        lottery.isDrawn = true;
        if (rewardAmount != 0) {
            lottery.rewardAmount = rewardAmount;
            _sendReward(lotteryId, lottery.user, rewardAmount);
        }
    }

    function drawLotteries(uint32[] calldata lotteryIds, uint256[] calldata preimages) external {
        require(lotteryIds.length == preimages.length, "Asymmetric batch");
        for (uint32 i = 0; i < preimages.length; i++) {
            drawLottery(lotteryIds[i], preimages[i]);
        }
    }

    function _sendReward(uint32 lotteryId, address winner, uint256 rewardAmount) internal {
        STABLE_COIN.transfer(winner, rewardAmount);
        emit LotteryWon(lotteryId, winner, rewardAmount);
    }

    function _evaluateReward(Lottery memory lottery) internal view returns(uint256) {
        uint256 composedRandNum = uint256(keccak256(abi.encode(lottery.revealedRandNum, lottery.userRandNum)));
        uint256 rewardAmount = 
            composedRandNum <= ~uint256(0) / 100 * LOTTERY_WIN_RATIO
            ? calculateRewardAmount(lottery.foxUserHoldingsSnapshot, lottery.poolSizeSnapshot, lottery.foxSupplySnapshot, LOTTERY_REWARD_COEFFICIENT)   
            : 0 ;
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

    function calculateRewardAmount(
        uint256 foxHoldings,
        uint256 poolSize,
        uint256 foxSupply,
        uint256 coefficient
    ) public view returns(uint256) {
        uint256 rewardAmount = foxHoldings * poolSize * coefficient / foxSupply;
        if (rewardAmount >= currentPoolSize()/MAX_REWARD_RATIO) rewardAmount = currentPoolSize()/MAX_REWARD_RATIO;
        return rewardAmount;
    }


    function getHashesLength() public view returns(uint256) {
        return randNumHashes.length;
    }

    function getLotteriesLength() public view returns(uint256) {
        return lotteries.length;
    }

    function isLotteryDrawn(uint256 lotteryId) public view returns(bool) {
        return lotteries[lotteryId].isDrawn;
    }

}
