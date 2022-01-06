const routes = [{
        path: "/redirect",
        method: "get",
        handler: (request, h) => {
            return h.redirect("/home")
        }
    },
    {
        path: "/home",
        method: "get",
        handler: (request, h) => {
            return "hello from home"
        }
    },
    {
        path: "/h-plugin",
        method: "get",
        handler: (request, h) => {
            return `plugin added with response object and the result is:${h.getDate()}`
        }
    },
    {
        path: "/request-plugin",
        method: "get",
        handler: (request, h) => {
            return `plugin added with request object and the result is:${request.name()}`
        }
    }
]

module.exports = routes