let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    access: {
        type: String
    },
    avatar: String,
    resetPasswordToken:{
        type: String
    },
    resetPasswordTokenExpiry: {
        type: Date
    }
});

module.exports = mongoose.model('user', userSchema);