//schema for a mongodb a model file
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    phonenumber: {
        type: Number
    }
});

// exporting model so we can use it in another files 
module.exports = mongoose.model('user', userSchema);