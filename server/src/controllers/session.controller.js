var jwt = require('jsonwebtoken');
const SessionService = require('../services/session.service');
const { StatusCodes } = require('http-status-codes');

const createSession = async (req, res) => {
    const token = await SessionService.createSession(req.body);
    if (token) {
        res.status(StatusCodes.OK).send(token);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
}

const SessionController = {
    createSession
}

module.exports = SessionController;