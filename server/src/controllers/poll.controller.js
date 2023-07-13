const { StatusCodes } = require('http-status-codes');
const PoolService = require('../services/poll.service');
const { UserModel } = require('../models');
const { use } = require('../routes/poll.router');

const createPool = async (req, res) => {
    const userId = Number(req.params.id);
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
    const user = await UserModel.findOne({ where: { id: `${req.params.id}` }, include: ["poll"] });
    console.log(user);
    res.status(200).send(user)
}

const PoolController = {
    createPool,
    getPollsOfUser
}
module.exports = PoolController;