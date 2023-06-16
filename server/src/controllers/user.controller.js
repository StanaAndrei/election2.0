const user = require('../models/user');
const UserService = require('../services/user.service');
const db = require('./../models');
const { StatusCodes } = require('http-status-codes');

const registerUser = async (req, res) => {
    const user = await UserService.registerUser(req.body);
    if (user) {
        res.status(StatusCodes.CREATED).send(user);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
}

const getUser = async (req, res) => {
    const userData = await UserService.getUser(req.params.id);
    if (userData) {
        res.status(StatusCodes.OK).send(userData);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
}

const deleteUser = async (req, res) => {
    
}

const UserController = {
    registerUser,
    getUser,
    deleteUser
};

module.exports = UserController;