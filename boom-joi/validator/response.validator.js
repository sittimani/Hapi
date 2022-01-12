const joi = require('joi')

const validate = joi.object({
    statusCode: joi.number().required(),
    message: joi.string().required()
})

module.exports = validate