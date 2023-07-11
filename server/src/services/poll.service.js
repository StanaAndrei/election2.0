const { PollModel } = require("../models");
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

const getPollsOf = userId => {
    
}

const PollService = {
    createPoll
}
module.exports = PollService;