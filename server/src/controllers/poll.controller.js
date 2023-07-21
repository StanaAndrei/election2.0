const { StatusCodes } = require('http-status-codes');
const PoolService = require('../services/poll.service');
const { UserModel, PollModel } = require('../models');
const { use } = require('../routes/poll.router');
const PollService = require('../services/poll.service');

const createPool = async (req, res) => {
    const userId = res.locals.userId;
    console.log(req.body.options);
    console.log(userId);
    const pollId = await PoolService.createPoll({ userId, name: req.body.name, options: req.body.options });
    if (!pollId) {
        res.status(StatusCodes.BAD_REQUEST).send();
    } else {
        res.status(StatusCodes.OK).send(String(pollId));
    }//*/
    res.end()
}

const getPollsOfUser = async (req, res) => {
    const data = await PollService.getPollsOf(req.params.id)
    if (!data) {
        return res.send(StatusCodes.BAD_REQUEST).send()
    }
    res.status(StatusCodes.OK).send(data)
}

const PoolController = {
    createPool,
    getPollsOfUser
}
module.exports = PoolController;