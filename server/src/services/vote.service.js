const { VoteModel } = require("../models");

const addVote = async voteData => {
    try {
        const vote = await VoteModel.create(voteData)
        return vote;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const VoteService = {
    addVote,
}
module.exports = VoteService;