const User = require('../models/userModel')


exports.createIdea = async (req, res) => {
    try {
        const { idea_name, author_name, idea_desc } = req.body;

    const user = await User.create({
        idea_name, 
        author_name, 
        idea_desc
    })

    res.status(200).json({
        success: true,
        message: "Idea created successfully",
        user
    })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
            
        })
    }
}

exports.getIdea = async(req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            message: "All ideas",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.editIdea = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            success: true,
            message: "User Updated successfully",
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

exports.deleteIdea = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
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