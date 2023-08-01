const express = require("express");
const VoteController = require("../controllers/vote.controller");
const router = express.Router();
const processJwt = require('../middlewares/jwt.middleware');
const AuthMiddleware = require("../middlewares/auth.middleware");

router.post('/', VoteController.addVote)
router.get('/:id', [processJwt, AuthMiddleware.isAuth], VoteController.getPollWithVotes)

module.exports = router;