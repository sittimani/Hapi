const hapi = require('@hapi/hapi')
const routes = require("./routes/index")

const init = async() => {
    const server = new hapi.Server({
        port: 3000,
        host: "localhost"
    })

    const getDate = {
        name: 'getDate',
        register: async function(server, options) {

            const currentDate = function() {
                const date = new Date();
                const result = `hello ${options.name}!!!, today date is ${date}`
                return result
            };

            server.decorate('request', "name", currentDate)
            server.decorate('toolkit', 'getDate', currentDate);
        }
    };


    await server.register({ plugin: getDate, options: { name: "Mani" } })
    server.route(routes)
    await server.start()
    console.log(server.info.uri)
}
init()