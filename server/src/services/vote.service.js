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

const getPollWithVotes = async (id, userId) => {
    try {
        const poll = await PollModel.findByPk(id, {
            include: ['votes']
        })
        const pollData = poll.get({ plain: true });
        let votesOf = new Array(pollData.options.length).fill(0)
        let ivoted = false
        console.log('!!!!!!!', userId);
        for (const vote of pollData.votes) {
            votesOf[vote.optionNr]++;
            if (String(userId) === String(vote.userId)) {
                ivoted = true
            }
        }
        pollData.votesOf = votesOf;
        pollData.ivoted = ivoted;
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