const { UserModel } = require("../models");

const registerUser = async userRegData => {
    try {
        const user = await UserModel.create(userRegData);
        user.password = '';
        return user;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const getUser = async userId => {
    try {
        const user = await UserModel.findByPk(userId);
        return user.dataValues;
    } catch (e) {
        console.error(e);
        return null;
    }
}

const deleteUser = async userId => {
    try {
        const user = await UserModel.findByPk(userId);
        await user.destroy();
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

const getAllUsers = async () => {
    try {
        const users = await UserModel.findAll();
        return users;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const UserService = {
    registerUser,
    getUser,
    getAllUsers,
    deleteUser,
}

module.exports = UserService;