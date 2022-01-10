const Jwt = require("jsonwebtoken")
const body = require("../validators/validators")

const routes = [{
        path: "/create-token",
        method: "post",
        handler: async(request, h) => {
            return await Jwt.sign(request.payload, process.env.PRIVATE_KEY)
        },
        options: {
            validate: {
                payload: body,
                failAction: (request, h, err) => {
                    return err
                }
            }
        }
    },
    {
        path: "/verify-token",
        method: "get",
        handler: (request, h) => {
            return request.auth.credentials
        },
        options: {
            auth: "jwt"
        }
    }
]

module.exports = routes