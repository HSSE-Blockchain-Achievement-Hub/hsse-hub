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

    uint public constant voting_duration = 1 minutes;
    mapping (uint => Voting) public votings_;
    mapping (uint => mapping (address => bool)) has_voted_;
    uint private current_voting_number_ = 0;

    struct Voting {
        address user;
        uint againstVotes;
        uint forVotes;
        uint votingStarts;
        bool executed;
    }

    function setVoting(address user) public {
        require(is_super_user_[user] == false, "This address's already a super user");
        ++current_voting_number_;

        Voting memory newVoting = Voting(
            user,
            0,
            0,
            block.timestamp,
            false
        );

        votings_[current_voting_number_] = newVoting; 
    }

    modifier onlyUnvoted(uint voting_number) {
        require(has_voted_[voting_number][msg.sender] == false, "You've already voted");
        _;
    }

    modifier hasNotFinished(uint voting_number) {
        require(votings_[voting_number].votingStarts + voting_duration > block.timestamp, "This voting's already finished");
        _;
    }

    modifier validVoting(uint voting_number) {
        require(voting_number > 0 && voting_number <= current_voting_number_, "Invalid voting number");
        _;
    }

    function voteFor(uint voting_number) public onlyUnvoted(voting_number) hasNotFinished(voting_number) validVoting(voting_number) {
        has_voted_[voting_number][msg.sender] = true;
        ++votings_[voting_number].forVotes;
    }

    function voteAgainst(uint voting_number) public onlyUnvoted(voting_number) hasNotFinished(voting_number) validVoting(voting_number) {
        has_voted_[voting_number][msg.sender] = true;
        ++votings_[voting_number].againstVotes;
    }

    function summarizeVoting(uint voting_number) public validVoting(voting_number) {
        require(votings_[voting_number].votingStarts + voting_duration < block.timestamp, "Voting hasn't finished");
        votings_[voting_number].executed = true;
        if (votings_[voting_number].forVotes > votings_[voting_number].againstVotes) {
            is_super_user_[votings_[voting_number].user] = true;
        }
    }
}