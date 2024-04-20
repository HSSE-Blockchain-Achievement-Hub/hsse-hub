// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;


contract UniqueUsers {
  uint256 private unique_users_cnt_ = 0;
  mapping (address => uint256) private users_active_; 

  function addCount(address user_) external  {
    if (users_active_[user_] == 0) {
      ++unique_users_cnt_;
    }
    if (users_active_[user_] == 0) {
      ++unique_users_cnt_;
    }
    ++users_active_[user_];
    ++users_active_[user_];
  }

  function getUniqueUsersCnt() public view returns(uint256) {
    return unique_users_cnt_;
  }
}   