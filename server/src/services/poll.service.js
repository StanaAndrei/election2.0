const { PollModel } = require("../models");
const { error } = require("../schemas/userPatch.schema");

const createPoll = async (userId, { name, }) => {
    try {
        const poll = await PollModel.create({
            name: name,
            userId
        })
        return poll.dataValues.id;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const PollService = {
    createPoll
}
module.exports = PollService;