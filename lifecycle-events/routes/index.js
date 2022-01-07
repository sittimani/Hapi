const routes = [{
    path: "/user",
    method: "get",
    options: {
        log: {
            collect: true
        }
    },
    handler: (request, h) => {
        return {
            name: "mani",
            age: 21
        }
    }
}]

module.exports = routes