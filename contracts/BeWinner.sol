// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IWinner {
    function attempt() external;
}

contract BeWinner {
    IWinner private alchemy;

    constructor(address _addr) {
        alchemy = IWinner(_addr);
    }

    address private addressconc = address(alchemy);

    //We trying to call the function attempt() from the contract so that  msg.sender != tx.origin
    function becomeWinner() external {
        alchemy.attempt();
    }
}
