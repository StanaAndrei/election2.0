const { StatusCodes } = require("http-status-codes");

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

const isActivated = (req, res, next) => {
    
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