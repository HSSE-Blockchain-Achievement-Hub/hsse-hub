// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./UniqueUsers.sol";

contract SuperUsers {
    UniqueUsers private unique_manager;

    mapping(address => bool) private is_super_user_;

    constructor(address _uniqueUsers, address[] memory super_users) {
        unique_manager = UniqueUsers(_uniqueUsers);

        for (uint256 i = 0; i < super_users.length; ++i) {
            is_super_user_[super_users[i]] = true;
            unique_manager.addCount(super_users[i]);
        }
    }

    function isSuperUser(address user) public view returns (bool) {
        return is_super_user_[user];
    }

    uint256 public constant voting_duration = 2 days;
    mapping(uint256 => Voting) private votings_;
    mapping(uint256 => mapping(address => bool)) private has_voted_;
    uint256 private current_voting_number_ = 0;

    struct Voting {
        address user;
        uint256 againstVotes;
        uint256 forVotes;
        uint256 votingStarts;
        bool executed;
    }

    function setVoting(address user) public {
        require(
            is_super_user_[user] == false,
            "This address's already a super user"
        );
        ++current_voting_number_;

        Voting memory newVoting = Voting(user, 0, 0, block.timestamp, false);

        votings_[current_voting_number_] = newVoting;

        unique_manager.addCount(user);
    }

    modifier onlyUnvoted(uint256 voting_number) {
        require(
            has_voted_[voting_number][msg.sender] == false,
            "You've already voted"
        );
        _;
    }

    modifier hasNotFinished(uint256 voting_number) {
        require(
            votings_[voting_number].votingStarts + voting_duration >
                block.timestamp,
            "This voting's already finished"
        );
        _;
    }

    modifier validVoting(uint256 voting_number) {
        require(
            voting_number > 0 && voting_number <= current_voting_number_,
            "Invalid voting number"
        );
        _;
    }

    function voteFor(uint256 voting_number)
        public
        onlyUnvoted(voting_number)
        hasNotFinished(voting_number)
        validVoting(voting_number)
    {
        has_voted_[voting_number][msg.sender] = true;
        ++votings_[voting_number].forVotes;
        unique_manager.addCount(msg.sender);
    }

    function voteAgainst(uint256 voting_number)
        public
        onlyUnvoted(voting_number)
        hasNotFinished(voting_number)
        validVoting(voting_number)
    {
        has_voted_[voting_number][msg.sender] = true;
        ++votings_[voting_number].againstVotes;
        unique_manager.addCount(msg.sender);
    }

    event BecomeSuperUser(address indexed user_);
    event RemoveSuperUser(address indexed user_);
    event VotingEnded(Voting indexed voting_, bool indexed result);

    function summarizeVoting(uint256 voting_number)
        public
        validVoting(voting_number)
    {
        require(votings_[voting_number].executed == false, "Voting's ended");
        require(
            votings_[voting_number].votingStarts + voting_duration <
                block.timestamp,
            "Voting hasn't finished"
        );
        votings_[voting_number].executed = true;
        if (
            votings_[voting_number].forVotes >
            votings_[voting_number].againstVotes &&
            ((votings_[voting_number].forVotes + votings_[voting_number].againstVotes) / unique_manager.getUniqueUsersCnt()) * 100 >= 15
        ) {
            is_super_user_[votings_[voting_number].user] = true;
            emit BecomeSuperUser(votings_[voting_number].user);
            emit VotingEnded(votings_[voting_number], true);
        } else {
            emit VotingEnded(votings_[voting_number], false);
        }
    }
}