var jwt = require('jsonwebtoken');
const SECRETS = require('../../secrets');
const JWT_SECRET = SECRETS.JWT_SECRET;
const USED_SIGN_ALGO = 'HS256';

module.exports = {
    JWT_SECRET,
    USED_SIGN_ALGO,
    jwt
}