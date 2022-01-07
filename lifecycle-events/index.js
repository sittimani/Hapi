const hapi = require('@hapi/hapi')
const routes = require("./routes/index")

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    server.ext("onRequest", (request, h, error) => {
        console.log(`read request arrived at ${new Date()}`)
        return h.continue
    })

    server.ext("onPreResponse", (request, h, error) => {
        console.log(`request closed at ${new Date()}`)
        return h.continue
    })

    server.ext("onPostStart", (server) => {
        console.log(`server running at ${server.info.port}`)
    })

    server.ext("onPreHandler", (request, h, error) => {
        console.log(`request handling started ${new Date().toISOString()}`)
        return h.continue
    })


    server.event("greet")

    server.events.on("greet", (data) => {
        console.log(`hello ${data}!!!, have a nice day!!!`)
    })

    server.events.emit("greet", "mani")

    server.events.on("response", (request) => {
        console.log("response event")
    })

    server.route(routes)
    await server.start()
}
init()