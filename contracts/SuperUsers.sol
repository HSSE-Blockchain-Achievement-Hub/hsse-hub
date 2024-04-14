// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract SuperUsers {
    mapping (address => bool) private is_super_user_;

    constructor (address[] memory super_users) {
        for (uint i = 0; i < super_users.length; ++i) {
            is_super_user_[super_users[i]] = true;
        }
    }

    function isSuperUser(address user) view  public returns(bool) {
        return is_super_user_[user];
    }
}
