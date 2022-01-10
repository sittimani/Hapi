const Joi = require("joi")

const body = Joi.object({
    name: Joi.string().required().regex(/^[a-zA-Z]+$/),
    email: Joi.string().required().email(),
    password: Joi.string().required().alphanum()
})

module.exports = body