const mongoose = require('mongoose')

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`Connect to database ${conn.connection.host}`);
    })
    .catch(err => console.log(err))
}

module.exports = connectToDb;