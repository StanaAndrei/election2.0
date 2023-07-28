const { PollModel, UserModel } = require("../models");
const { error } = require("../schemas/userPatch.schema");

const createPoll = async pollData => {
    try {
        const poll = await PollModel.create(pollData)
        return poll.dataValues.id;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const getPollsOf = async userId => {
    try {
        const user = await UserModel.findOne({ where: { id: `${userId}` }, attributes: ['firstName'], include: {
            model: PollModel,
            as: 'polls',
            attributes: ['id', 'name']
        }});
        return user;
    } catch(err) {
        console.error(err);
        return null
    }
}

const deletePoll = async pollId => {
    try {
        await PollModel.destroy({ where: { id: pollId } });
        return true;
    } catch(err) {
        return false;
    }
}

const getPollByCodeOrId = async where => {
    try {
        const poll = PollModel.findOne(where, {
            include: ['votes']
        })
        return poll;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const PollService = {
    createPoll,
    getPollsOf,
    deletePoll,
    getPollByCodeOrId
}
module.exports = PollService;