const bcrypt = require('bcrypt');
const SECRET_SALT_ROUNDS = process.env.SECRET_SALT_ROUNDS || 10;

const GLOBAL_SALT = bcrypt.genSaltSync(SECRET_SALT_ROUNDS);

module.exports = {
    GLOBAL_SALT
}