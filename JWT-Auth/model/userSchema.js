const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')

const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [5, 'Name must be less than 10 char'],
        maxLength: [50, 'Name must be less than 50 char'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'user email is required'],
        unique: [true, 'already registered'],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiryDate: {
        type: Date
    }
}, {
    timestamps: true
})

userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id: this._id, email: this.email},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

const userModel = mongoose.model("user", userSchema)
module.exports = userModel;