// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GasTank {
    mapping(address => uint256) public ethBalances;
    mapping(address => uint256) public usdcBalances;
    
    address public usdcToken;
    
    event EthDeposited(address indexed user, uint256 amount);
    event EthWithdrawn(address indexed user, uint256 amount);
    event UsdcDeposited(address indexed user, uint256 amount);
    event UsdcWithdrawn(address indexed user, uint256 amount);
    
    constructor(address _usdcToken) {
        usdcToken = _usdcToken;
    }
    
    // ETH deposit function
    function depositEth() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        ethBalances[msg.sender] += msg.value;
        emit EthDeposited(msg.sender, msg.value);
    }
    
    // ETH withdraw function
    function withdrawEth(uint256 amount) external {
        require(ethBalances[msg.sender] >= amount, "Insufficient ETH balance");
        ethBalances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit EthWithdrawn(msg.sender, amount);
    }
    
    // USDC deposit function
    function depositUsdc(uint256 amount) external {
        require(amount > 0, "Deposit amount must be greater than zero");
        IERC20(usdcToken).transferFrom(msg.sender, address(this), amount);
        usdcBalances[msg.sender] += amount;
        emit UsdcDeposited(msg.sender, amount);
    }
    
    // USDC withdraw function
    function withdrawUsdc(uint256 amount) external {
        require(usdcBalances[msg.sender] >= amount, "Insufficient USDC balance");
        usdcBalances[msg.sender] -= amount;
        IERC20(usdcToken).transfer(msg.sender, amount);
        emit UsdcWithdrawn(msg.sender, amount);
    }
    
    function getEthBalance() external view returns (uint256) {
        return ethBalances[msg.sender];
    }
    
    function getUsdcBalance() external view returns (uint256) {
        return usdcBalances[msg.sender];
    }
}