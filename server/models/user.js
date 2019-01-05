let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    access: {
        type: String
    },
    avatar: String
});

module.exports = mongoose.model('user', userSchema);