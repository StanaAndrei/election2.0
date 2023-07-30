const VoteService = require("../services/vote.service");

const addVote = async (req, res) => {
    console.log(req.body);

    const vote = await VoteService.addVote(req.body);
    if (vote) {
        res.status(200).send()
    } else {
        res.status(400).send()
    }//*/
    res.end();
}

const getPollWithVotes = async (req, res) => {
    const { id } = req.params;
    const poll = await VoteService.getPollWithVotes(id)
    const pollData = poll.get({ plain: true });
    console.log(pollData.options.length);
    let votesOf = new Array(pollData.votes.length).fill(0)
    for (const vote of pollData.votes) {
        votesOf[vote.optionNr]++;
    }
    console.log(votesOf);
    res.status(200).send(poll);
}

const VoteController = {
    addVote,
    getPollWithVotes
}
module.exports = VoteController;