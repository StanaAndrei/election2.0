const { StatusCodes } = require('http-status-codes');
const PoolService = require('../services/poll.service');
const { UserModel, PollModel } = require('../models');
const { use } = require('../routes/poll.router');
const PollService = require('../services/poll.service');

const createPool = async (req, res) => {
    const userId = res.locals.userId;
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

const getPollByCode = async (req, res) => {

}

const deletePoll = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const ok = await PollService.deletePoll(id);
    res.status(StatusCodes.ACCEPTED).send(ok)
}

const PollController = {
    createPool,
    getPollsOfUser,
    deletePoll
}
module.exports = PollController;