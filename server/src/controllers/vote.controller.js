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

const VoteController = {
    addVote,
}
module.exports = VoteController;