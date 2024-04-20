// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;


contract Subscribers {
  mapping (address => uint256) private subscribers_amount_;
  mapping (address => mapping (address => bool)) private is_already_subscriber_;

  function isAlreadySubscriber(address from_, address to_) public view returns(bool) {
    return is_already_subscriber_[from_][to_];
  }

  function isAlreadySubscriber(address to_) public view returns(bool) {
    return is_already_subscriber_[msg.sender][to_];
  }

  function safeSub(address from_, address to_) private {
    is_already_subscriber_[from_][to_] = true;
    subscribers_amount_[to_] += 1;
  }

  function subscribeOn(address to_) public {
    require(!isAlreadySubscriber(msg.sender, to_), "You're already subscribed");
    require(msg.sender != to_, "You can't subscribed on yourself!");
    safeSub(msg.sender, to_);
  }

  function getSubscribersAmount(address target_) view public returns(uint256) {
    return subscribers_amount_[target_];
  }
}