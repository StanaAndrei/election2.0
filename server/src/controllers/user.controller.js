const UserService = require('../services/user.service');
const { StatusCodes } = require('http-status-codes');
const UserUpDto = require('./../dtos/user-up.dto');
const { sendEmailFromTemp } = require('./../settings/mailer.setup')
const otpGenerator = require('otp-generator')
const cacheInst = require('../settings/cache.setup');
const { sequelize } = require('../models');
const user = require('../models/user');

const registerUser = async (req, res) => {
    const user = await UserService.registerUser(req.body);
    if (user) {
        res.status(StatusCodes.CREATED).send(user);
        const otpCode = otpGenerator.generate(6, { 
            upperCaseAlphabets: false, 
            specialChars: false 
        });
        cacheInst.set(otpCode, user.id, { expires: 3600 })
        sendEmailFromTemp(user.email, 'Verify account!', 'activate', {
            fullName: user.fullName,
            otpCode
        });
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
}

const activateUser = async (req, res) => {
    const userId = cacheInst.take(req.params.otpCode);
    const ok = await UserService.activateUser(userId);
    if (ok) {
        res.status(StatusCodes.OK).send(ok);
    } else {
        res.status(StatusCodes.BAD_REQUEST).send(ok)
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

const getResetPassword = async (req, res) => {
    const email = req.params.email;
    const SUBJECT = 'Password reset!';
    const TEXT = '';
}

const resetPassword = async (req, res) => {

}

const updateUser = async (req, res) => {
    const { body: newData } = req;
    let parsedUserDto = undefined;
    try {
        parsedUserDto = await UserUpDto.validate(newData, {
            strict: true
        });
    } catch(err) {
        console.error(err);
        res.status(StatusCodes.BAD_REQUEST).send('INVALID_DTO');
        return;
    }
    console.log(parsedUserDto);
    const ok = await UserService.updateUser(newData, res.locals.userId);
    if (!ok || !parsedUserDto) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(false);
    } else {
        res.status(StatusCodes.ACCEPTED).send(true);
    }//*/
}

const UserController = {
    registerUser,
    getUser,
    deleteUser,
    getAllUsers,
    getResetPassword,
    resetPassword,
    updateUser,
    activateUser
};

module.exports = UserController;