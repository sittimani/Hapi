const hapi = require('@hapi/hapi')
const boom = require('boom')
const validator = require("./validator/response.validator")
const joi = require('joi')

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    server.route({
        path: "/is-error",
        method: "POST",
        handler: (request, h) => {
            const value = request.payload.isError
            if (value)
                return "No error"
            return boom.badData("Data contain false")
        }
    })

    server.route({
        path: "/param-valiator/{name}",
        method: "get",
        handler: (request, h) => {
            return {
                statusCode: 123,
                message: "mani"
            }
        },
        options: {
            response: {
                schema: validator,
                failAction: "error"
            },
            validate: {
                params: joi.object({
                    name: joi.string().regex(/^.[a-zA-Z]*/).min(3)
                })
            }
        }
    })
    await server.start()


    console.log(server.info.uri)
}

init()