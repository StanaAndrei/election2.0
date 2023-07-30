const express = require("express");
const VoteController = require("../controllers/vote.controller");
const router = express.Router();

router.post('/', VoteController.addVote)
router.get('/:id', VoteController.getPollWithVotes)

module.exports = router;