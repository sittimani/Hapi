const hapi = require('@hapi/hapi')
const routes = require("./routes/index")
const Jwt = require("jsonwebtoken")
require("dotenv").config()

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    const validate = async(decoded, request, h) => {
        const token = request.headers.authorization
        console.log(token)
        if (!token)
            return { isValid: false, credentials: null }
        try {
            await Jwt.verify(token, process.env.PRIVATE_KEY)
            return { isValid: true }
        } catch (error) {
            console.log(error)
            return { isValid: false, credentials: null }
        }
    }

    await server.register(require("hapi-auth-jwt2"))
    await server.auth.strategy("jwt", "jwt", {
        validate: validate,
        key: process.env.PRIVATE_KEY
    })


    server.route(routes)
    await server.start()


    console.log(server.info.uri)
}
init()