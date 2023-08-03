const VoteService = require("../services/vote.service");
const { StatusCodes } = require('http-status-codes');

const addVote = async (req, res) => {
    const vote = await VoteService.addVote({ 
        ...req.body,
        userId: res.locals.userId
    });
    if (vote) {
        res.status(StatusCodes.OK).send()
    } else {
        res.status(StatusCodes.BAD_REQUEST).send()
    }//*/
    res.end();
}

const getPollWithVotes = async (req, res) => {
    const { id } = req.params;
    const poll = await VoteService.getPollWithVotes(id, res.locals.userId)
    res.status(StatusCodes.OK).send(poll);
}

const VoteController = {
    addVote,
    getPollWithVotes
}
module.exports = VoteController;