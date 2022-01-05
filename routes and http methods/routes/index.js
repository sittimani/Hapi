const routes = [{
    path: "/get",
    method: "get",
    handler: (request, hapi) => {
        return "hello world!!!"
    }
}, {
    path: "/post",
    method: "POST",
    handler: (request, h) => {
        const data = request.payload
        return data
    }
}, {
    path: "/params/{name}",
    method: "POST",
    handler: (request, h) => {
        const data = request.params
        return `paramater received from user is: ${data.name.toUpperCase()}`
    }
}, {
    path: "/headers",
    method: "GET",
    handler: (request, h) => {
        const headers = request.headers
        return headers
    }
}, {
    path: "/multiple-method",
    method: ["GET", "POST"],
    handler: (request, h) => {
        return `user request with: ${request.method}`
    }
}, {
    path: "/all-method",
    method: "*",
    handler: (request, h) => {
        return `user request with ${request.method.toUpperCase()} method`
    }
}]

module.exports = routes