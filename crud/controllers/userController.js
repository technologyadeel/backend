const User = require('../models/userModel.js')

exports.home =  (req, res) => {
    res.send('Hello world')
}

exports.createUser = async (req, res) => {
    // extract info
    try {
        const {name, email} = req.body

        if(!name || !email) {
            throw new Error("Name and email are required")
        }

        const userExist = User.findOne({email:email})

        if(userExist) {
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }
}