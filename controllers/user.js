const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/user.model');
const router = express.Router();

// getting data from mongo db
router.route('/').get((req,res) => {
    userModel.find((error,user) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(user);
        }
    });
});

// router.route('/').post((req,res) => {
//     const model = new userModel({
//         name: req.body.name,
//         age: req.body.age,
//         phone: req.body.phone
//     });
//     try {
//         const user = model.save();
//         res.json(user);
//     }
//     catch(err) {
//         res.send('error',err);
//     }
// });


// exporting this file so we can is it outside
module.exports = router;