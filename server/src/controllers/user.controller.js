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

const getUser = (req, res) => {

}

const deleteUser = (req, res) => {
    
}

const UserController = {
    registerUser,
    getUser,
    deleteUser
};

module.exports = UserController;