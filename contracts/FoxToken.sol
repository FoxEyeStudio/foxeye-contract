// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {ERC20} from "./open-zeppelin/ERC20.sol";
import {Ownable} from "./open-zeppelin/Ownable.sol";


contract FoxToken is ERC20, Ownable {
    
    string internal constant NAME = 'FoxEye Token';
    string internal constant SYMBOL = 'FOX';
    uint256 public constant MAX_SUPPLY = 100 * 10**6 * 10**18;
    address public airdropContract;
    address public dividendsPool;

    constructor() public ERC20(NAME, SYMBOL) {        
    }

    // mint for airdrop
    function airdropMint(address account, uint256 amount) external {
        require(msg.sender == airdropContract, "Airdrop must be initiated from Airdrop Contract");
        _mint(account, amount);
    }

    // mint for general purpose
    function generalMint(address account, uint256 amount) external onlyOwner{ 
        _mint(account, amount);
    }

    function _mint(address account, uint256 amount) internal override {        
        require(totalSupply() + amount <= MAX_SUPPLY, "Mint cannot exceed MAX_SUPPLY");
        super._mint(account, amount);        
    }

    function lotteryBurn(address account,uint256 amount) external {
        require(msg.sender == dividendsPool, "Lottery burn must be initiated from Dividends Pool");
        _burn(account, amount);
    }

    function updateVitalAddresses(address _airdropContract, address _dividendsPool) external onlyOwner {
        airdropContract = _airdropContract;
        dividendsPool = _dividendsPool;
    }
    
}
