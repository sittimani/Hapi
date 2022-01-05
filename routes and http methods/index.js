const hapi = require('@hapi/hapi')
const routes = require("./routes/index")

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    server.route(routes)

    await server.start()

    console.log(server.info.uri)
}
init()