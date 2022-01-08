const hapi = require('@hapi/hapi')
const routes = require("./routes/index")

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    await server.register(require("@hapi/basic"))

    const users = {
        john: {
            username: 'john',
            password: 'password',
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    const validate = async(request, username, password) => {
        const user = users[username];
        if (!user) {
            return { credentials: null, isValid: false };
        }
        const isValid = password === user.password
        const credentials = { id: user.id, name: user.name }
        return { isValid, credentials };
    };

    server.auth.strategy("simpleAuth", "basic", { validate })
    server.route(routes)

    server.method("add", (a, b) => { return a + b })
    const value = server.methods.add(10, 20)
    console.log(value)

    await server.start()
    console.log(server.info.uri)
}
init()