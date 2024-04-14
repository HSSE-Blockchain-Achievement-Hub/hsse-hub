// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract SuperUsers {
    mapping (address => bool) private is_super_user;

    constructor (address[] memory super_users) {
        for (uint i = 0; i < super_users.length; ++i) {
            is_super_user[super_users[i]] = true;
        }
    }

    function isSuperUser(address user) view  public returns(bool) {
        return is_super_user[user];
    }
}