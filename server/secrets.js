
const JWT_SECRET = process.env.JWT_SECRET || 'private.key';
const SECRET_SALT_ROUNDS = process.env.SECRET_SALT_ROUNDS || 10;
const THIS_URL_SECRET = process.env.THIS_URL_SECRET || 'http://localhost:3000';

const SECRETS = {
    JWT_SECRET,
    SECRET_SALT_ROUNDS,
    THIS_URL_SECRET
}

module.exports = SECRETS;