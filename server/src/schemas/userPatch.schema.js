const Joi = require('joi');

const userPatchSchema = Joi.object({
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    email: Joi.string().min(3).email(),
})

module.exports = userPatchSchema;