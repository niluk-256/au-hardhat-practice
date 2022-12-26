// SPDX-License-Identifier: MIT

// import "hardhat/console.sol";
pragma solidity ^0.8.7;
contract Faucet {

//function to withdraw
function  withdraw(uint _amount) external payable {
require( _amount  <= 100000000000000000, "Amount exceeded the limit ");
  payable(msg.sender).transfer(_amount);
}
//function to recieve ETH
receive() external payable {}


}
