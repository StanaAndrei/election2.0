const { StatusCodes } = require("http-status-codes");
const { UserModel } = require("../models");

const checkJwt = (res) => {
    
}

const isAuth = (req, res, next) => { 
    if (!res.locals.decodedJwt) {
        return res.send(StatusCodes.UNAUTHORIZED).send();
    }
    try {
        const { userId } = res.locals.decodedJwt;
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

const isActivated = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({
            where: { email: req.body.email }
        })
        next();
    } catch(err) {
        console.error(err);
    }
}

const isAdmin = (req, res, next) => {
    if (!res.locals.decodedJwt) {
        return res.send(StatusCodes.UNAUTHORIZED).send();
    }

    if (res.locals.decodedJwt.role === 'ADMIN') {
        next();
    } else {
        res.status(StatusCodes.FORBIDDEN).send()
    }
}

const AuthMiddleware = {
    isAuth,
    isActivated,
    isAdmin,
}

module.exports = AuthMiddleware;