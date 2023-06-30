const Joi = require('joi');

const userPatchSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email()
})

module.exports = userPatchSchema;