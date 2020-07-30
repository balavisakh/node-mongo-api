//schema for a mongodb a model file
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    position: {
        type: String
    },
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    phonenumber: {
        type: String,
    }
});

// exporting model so we can use it in another files 
module.exports = mongoose.model('user', userSchema);