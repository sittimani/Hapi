const hapi = require('@hapi/hapi')
const routes = require('./routes/routes')
require('dotenv').config()

const server = hapi.server({
    port: 3000,
    host: "localhost"
})

const init = async() => {
    server.events.on('start', () => {
        console.log(`server running in: ${server.info.uri}`)
    })

    await server.register({
        plugin: require('hapi-mongodb'),
        options: {
            url: `mongodb://localhost/${process.env.DBNAME}`,
            settings: {
                useUnifiedTopology: true
            },
            decorate: true
        }
    })

    server.route(routes)
    await server.start()
}

init()