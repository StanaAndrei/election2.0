const user = require('../models/user');
const UserService = require('../services/user.service');
const db = require('./../models');
const { StatusCodes } = require('http-status-codes');
//const sendEmail = require('./../settings/mailer.setup')


const registerUser = async (req, res) => {
    const user = await UserService.registerUser(req.body);
    if (user) {
        res.status(StatusCodes.CREATED).send(user);
        //sendEmail(user.email, 'Verify account!', 'TODO: verify account!');
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
    const deleted = await UserService.deleteUser(req.params.id);
    res.status(StatusCodes.OK).send({
        deleted
    })
}

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    if (users) {
        res.status(StatusCodes.OK).send(users);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send()
    }
}

const UserController = {
    registerUser,
    getUser,
    deleteUser,
    getAllUsers
};

module.exports = UserController;