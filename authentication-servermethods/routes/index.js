const routes = [{
    path: "/user",
    method: "get",
    options: {
        auth: "simpleAuth"
    },
    handler: (request, h) => {
        return {
            name: "mani",
            age: 21
        }
    }
}, {
    path: "/login",
    method: "get",
    options: {
        auth: "simpleAuth"
    },
    handler: (request, h) => {
        return "welcome"
    }
}, {
    path: "/logout",
    method: 'get',
    handler: (request, h) => {
        return h.response("logout").code(401)
    }
}]

module.exports = routes