const { VoteModel, PollModel } = require("../models");

const addVote = async voteData => {
    try {
        const vote = await VoteModel.create(voteData)
        return vote;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const getPollWithVotes = async id => {
    try {
        const poll = await PollModel.findByPk(id, {
            include: ['votes']
        })
        return poll;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const VoteService = {
    addVote,
    getPollWithVotes
}
module.exports = VoteService;