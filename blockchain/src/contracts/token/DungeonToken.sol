// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DungeonToken is ERC20 {
    constructor() ERC20("Dungeon", "DGN") { } 

    function faucet() public {
        _mint(msg.sender, 10e18);
    }

    function reward(address _to) public {
        _mint(_to, 4e18);
    }

    function charge() public {
        transferFrom(msg.sender, address(this), 5e18);
    }
}