const { StatusCodes } = require('http-status-codes');
const PoolService = require('../services/poll.service');
const { UserModel, PollModel } = require('../models');
const PollService = require('../services/poll.service');

const createPool = async (req, res) => {
    const userId = res.locals.userId;
    const pollId = await PoolService.createPoll({ userId, ...req.body });
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

const getPollByCodeOrId = async (req, res) => {
    const { id, code } = req.body;
    let where = undefined;
    if (id) {
        where = { id };
    } else if (code) {
        where = { code };
    } else {
        return res.status(StatusCodes.BAD_REQUEST).send()
    }

    const poll = await PollService.getPollByCodeOrId(where);
    if (poll) {
        res.status(StatusCodes.OK).send(poll)
    } else {
        res.status(StatusCodes.BAD_REQUEST).send()
    }
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
    deletePoll,
    getPollByCodeOrId
}
module.exports = PollController;