const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const example = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('login', example);