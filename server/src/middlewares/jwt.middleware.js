const jwt = require('jsonwebtoken');
const SECRETS = require("../../secrets");
const UserService = require("../services/user.service");
const { StatusCodes } = require('http-status-codes');

const processJwt = (req, res, next) => {
    const token = req.headers['jwt'];
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).send()
    }
    const decodedJwt = jwt.verify(token, SECRETS.JWT_SECRET);
    res.locals.decodedJwt = decodedJwt;
    next();
}

module.exports  = processJwt;