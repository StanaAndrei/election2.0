const { UserModel } = require("../models");

const registerUser = async userRegData => {
    try {
        const user = await UserModel.create(userRegData);
        return user;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const getUser = async userId => {
    try {
        const user = await UserModel.findByPk(userId);
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        return user.dataValues;
    } catch (e) {
        console.error(e);
        return null;
    }
}

const UserService = {
    registerUser,
    getUser
}

module.exports = UserService;