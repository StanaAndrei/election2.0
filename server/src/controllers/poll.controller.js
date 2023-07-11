const { StatusCodes } = require('http-status-codes');
const PoolService = require('../services/poll.service')

const createPool = async (req, res) => {
    const userId = Number(req.params.id);
    console.log(userId);
    const pollId = await PoolService.createPoll(userId, req.body);
    if (!pollId) {
        res.status(StatusCodes.BAD_REQUEST).send();
    } else {
        res.status(StatusCodes.OK).send(String(pollId));
    }
}

const getPoolsOfUser = async (req, res) => {
    console.log(req.params.id);
    res.end()
}

const PoolController = {
    createPool,
    getPoolsOfUser
}
module.exports = PoolController;