const { StatusCodes } = require("http-status-codes");
const jwt = require('jsonwebtoken');
const SECRETS = require("../../secrets");
const UserService = require("../services/user.service");

const isAuth = (req, res, next) => {   
    try {
        const token = req.headers['jwt'];
        if (!token) {
            return res.status(StatusCodes.UNAUTHORIZED).send()
        }
        const decodedJwt = jwt.verify(token, SECRETS.JWT_SECRET);
        const { userId } = decodedJwt;
        if (userId == req.params.id) {
            res.locals.userId = userId;
            next();
        } else {
            return res.status(StatusCodes.FORBIDDEN).send()
        }
    } catch (err) {
        console.error(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send()
    }
}

const isActivated = (req, res, next) => {
    const ignorePaths = [''];
    if (ignorePaths.includes(req.path)) {

    }
}

const AuthMiddleware = {
    isAuth
}

module.exports = AuthMiddleware;