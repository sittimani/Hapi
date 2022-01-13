const Joi = require("joi")
const { createUser, getUser, updateUser, deleteUser } = require("../controller/user")
const userValidator = require("../validator/user.validator")

const routes = [{
        path: '/create',
        method: 'post',
        handler: async(request, h) => {
            const db = request.mongo.db
            return await createUser(db, request.payload)
        },
        options: {
            validate: {
                payload: userValidator
            }
        }
    },
    {
        path: '/get-users',
        method: 'get',
        handler: async(request, h) => {
            const db = request.mongo.db
            return await getUser(db)
        },
        options: {
            response: {
                failAction: "log",
                schema: Joi.array().items(userValidator)
            }
        }
    },
    {
        path: '/update-user/{id}',
        method: 'put',
        handler: async(request, h) => {
            const db = request.mongo.db
            const ObjectId = request.mongo.ObjectId
            return await updateUser(db, ObjectId(request.params.id), request.payload)
        },
        options: {
            validate: {
                params: Joi.string().required().min(5)
            }
        }
    },
    {
        path: '/delete-user/{id}',
        method: 'delete',
        handler: async(request, h) => {
            const db = request.mongo.db
            const ObjectId = request.mongo.ObjectId
            return await deleteUser(db, ObjectId(request.params.id))
        },
        options: {
            validate: {
                params: Joi.string().required().min(5)
            }
        }
    }
]

module.exports = routes