const Joi = require('joi');

const userPatchSchema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
})

module.exports = userPatchSchema;