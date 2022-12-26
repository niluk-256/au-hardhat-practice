//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ModifyVariable {
    uint256 public x;
    string public a = "MEOW XD";
    bytes32 public immutable cat;

    constructor(uint256 _x) {
        cat = "ALCHMEY WEEK 4 :)";
        x = _x;
    }

    function modifyToLeet() external {
        x = 2023;
    }

    function modifyMeow(string memory _meow) external {
        a = _meow;
    }
}
