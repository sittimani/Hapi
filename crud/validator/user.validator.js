const joi = require('joi')

const userValidator = joi.object({
    name: joi.string().required().regex(/^.[a-zA-Z]*/),
    team: joi.string().required().regex(/^.[a-zA-Z]*/),
})

module.exports = userValidator