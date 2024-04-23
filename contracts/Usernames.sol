// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;


contract Usernames {
  mapping (address => string) private usernames_;
  mapping (string => address) private owners_;

  function hasUsername() public view returns (bool) {
    bytes memory bytestring_ = bytes(usernames_[msg.sender]);
    return bytestring_.length != 0;   
  }

  function hasUsername(address user_) public view returns (bool) {
    bytes memory bytestring_ = bytes(usernames_[user_]);
    return bytestring_.length != 0;   
  }

  function getUsername() public view returns (string memory) {
    return usernames_[msg.sender];
  }

  function getUsername(address user_) public view returns (string memory) {
    return usernames_[user_];
  }

  function setUsername(string memory name_) external {
    usernames_[msg.sender] = name_;
  }
}