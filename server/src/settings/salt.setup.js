const bcrypt = require('bcrypt');
const SECRETS = require('../../secrets');
const SECRET_SALT_ROUNDS =  SECRETS.SECRET_SALT_ROUNDS;

const GLOBAL_SALT = bcrypt.genSaltSync(SECRET_SALT_ROUNDS);

module.exports = {
    GLOBAL_SALT
}