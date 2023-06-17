
const JWT_SECRET = process.env.JWT_SECRET || 'private.key';
const SECRET_SALT_ROUNDS = process.env.SECRET_SALT_ROUNDS || 10;

const SECRETS = {
    JWT_SECRET,
    SECRET_SALT_ROUNDS
}

module.exports = SECRETS;