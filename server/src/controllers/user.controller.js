const db = require('./../models');
const { StatusCodes } = require('http-status-codes');

const { UserModel } = db;

const registerUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.create(req.body);
        res.status(StatusCodes.CREATED).send(user);

    } catch (e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
}

const getUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        res.status(StatusCodes.OK).send({
            userData: user.dataValues
        })
    } catch (e) {
        console.error(e);
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