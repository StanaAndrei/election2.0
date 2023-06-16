var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'private.key';
const USED_SIGN_ALGO = 'HS256';

module.exports = {
    JWT_SECRET,
    USED_SIGN_ALGO
}