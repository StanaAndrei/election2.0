const { UserModel } = require("../models");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { JWT_SECRET, USED_SIGN_ALGO } = require("../settings/jwt.setup");

const createSession = async loginData => {
    const user = await UserModel.scope('withPassword').findOne({
        where: {
            email: loginData.email
        }
    });
    if (!user) {
        return null;
    }
    const { password } = user.dataValues;
    const ok = bcrypt.compareSync(loginData.password, password);
    if (!ok) {
        return null;
    }
    const token = jwt.sign({
        userId: user.dataValues.id,
        role: user.dataValues.role,
    }, JWT_SECRET, {
        algorithm: USED_SIGN_ALGO
    });
    return token;
}

const SessionService = {
    createSession
}

module.exports = SessionService;