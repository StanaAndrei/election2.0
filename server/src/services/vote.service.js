const { VoteModel, PollModel } = require("../models");

const addVote = async voteData => {
    try {
        const vote = await VoteModel.create(voteData)
        return vote;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const getPollWithVotes = async id => {
    try {
        const poll = await PollModel.findByPk(id, {
            include: ['votes']
        })
        const pollData = poll.get({ plain: true });
        let votesOf = new Array(pollData.options.length).fill(0)
        for (const vote of pollData.votes) {
            votesOf[vote.optionNr]++;
        }
        pollData.votesOf = votesOf;
        pollData.votes = undefined
        return pollData;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const VoteService = {
    addVote,
    getPollWithVotes
}
module.exports = VoteService;