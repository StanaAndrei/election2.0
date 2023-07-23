const express = require("express");
const PollController = require("../controllers/poll.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const processJwt = require("../middlewares/jwt.middleware");
const router = express.Router();

router.post('/', [processJwt, AuthMiddleware.isAuth], PollController.createPool)
router.get('/of/:id', PollController.getPollsOfUser)
router.delete('/:id', [processJwt, AuthMiddleware.isAuth], PollController.deletePoll)

module.exports = router;