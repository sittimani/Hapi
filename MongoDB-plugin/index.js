const hapi = require('@hapi/hapi')
const routes = require("./routes/index")

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })


    await server.register({
        plugin: require("hapi-mongodb"),
        options: {
            url: "mongodb://localhost/hapi",
            settings: {
                useUnifiedTopology: true
            },
            decorate: true
        }
    })

    server.route(routes)
    await server.start()


    console.log(server.info.uri)
}
init()