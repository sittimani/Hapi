const routes = [{
        path: "/get-data",
        method: "get",
        handler: async(request, h) => {
            try {
                const db = request.mongo.db
                const data = await db.collection('first').find().toArray()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    },
    {
        path: "/post-data",
        method: "post",
        handler: async(request, h) => {
            try {
                const db = request.mongo.db
                const data = await db.collection('first').insertOne(request.payload)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    }
]

module.exports = routes