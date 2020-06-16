const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('User', User);