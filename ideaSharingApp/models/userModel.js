const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    idea_name: {
        type: String,
        required: [true, 'Name is required']
    },
    author_name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [20, 'Author name must be less than 20 char']
    },
    idea_desc: {
        type: String
    }

})

module.exports = mongoose.model('User', userSchema)