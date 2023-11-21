const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: String,
        default: 0,
        required: true
    },
    workInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model('Doctor', doctorSchema)