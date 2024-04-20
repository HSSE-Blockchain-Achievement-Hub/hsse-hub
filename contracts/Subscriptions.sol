// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;


contract Subscribers {
  mapping (address => uint256) private subscribers_amount_;
  mapping (address => mapping (address => bool)) private is_already_subscriber_;
  uint256 private unique_users_cnt_ = 0;
  mapping (address => uint256) private users_active_; 

  function isAlreadySubscriber(address from_, address to_) public view returns(bool) {  
    return is_already_subscriber_[from_][to_];
  }

  function isAlreadySubscriber(address to_) public view returns(bool) {
    return is_already_subscriber_[msg.sender][to_];
  }

  function getUniqueUsersCnt() public view returns(uint256) {
    return unique_users_cnt_;
  }

  function safeSub(address from_, address to_) private {
    is_already_subscriber_[from_][to_] = true;
    ++subscribers_amount_[to_];
    if (users_active_[from_] == 0) {
      ++unique_users_cnt_;
    }
    if (users_active_[to_] == 0) {
      ++unique_users_cnt_;
    }
    ++users_active_[from_];
    ++users_active_[to_];
  }

  function safeUnsub(address from_, address to_) private {
    is_already_subscriber_[from_][to_] = false;
    --subscribers_amount_[to_];
  }

  function subscribeOn(address to_) public {
    require(!isAlreadySubscriber(msg.sender, to_), "You're already subscribed");
    require(msg.sender != to_, "You can't subscribed on yourself!");
    safeSub(msg.sender, to_);
  }

  function unsubscribeFrom(address from_) public {
    require(isAlreadySubscriber(msg.sender, from_), "You're haven't been subscribed");
    require(msg.sender != from_, "You can't unsubscribe from yourself!");
    safeUnsub(msg.sender, from_);
  }

  function getSubscribersAmount(address target_) view public returns(uint256) {
    return subscribers_amount_[target_];
  }
}