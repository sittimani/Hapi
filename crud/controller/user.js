async function createUser(db, payload) {
    const data = await db.collection('users').insertOne(payload)
    return data
}

async function getUser(db) {
    const data = await db.collection('users').find().toArray()
    return data
}

async function deleteUser(db, id) {
    const data = await db.collection('users').deleteOne({ _id: id })
    return data
}

async function updateUser(db, id, payload) {
    const data = await db.collection('users').updateOne({ _id: id }, { $set: payload })
    return "updated successfully"
}

module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
}