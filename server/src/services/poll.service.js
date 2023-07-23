const { PollModel, UserModel } = require("../models");
const { error } = require("../schemas/userPatch.schema");

const createPoll = async pollData => {
    try {
        const poll = await PollModel.create({
            name: pollData.name,
            userId: pollData.userId,
            options: pollData.options
        })
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

const getPollByCode = async code => {
    
}

const deletePoll = async pollId => {
    try {
        await PollModel.destroy({ where: { id: pollId } });
        return true;
    } catch(err) {
        return false;
    }
}

const PollService = {
    createPoll,
    getPollsOf,
    getPollByCode,
    deletePoll,
}
module.exports = PollService;