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

// Add user details to mongodb
router.route('/adduser').post((req,res) => {
    const model = new userModel(req.body);
    try {
        const newuser = model.save().then(() => {
        res.status(200).json({'user':'new user added'});
        });
    }
    catch(err) {
        res.send('error',err);
    }
});

// Update user details in mongodb
router.route('/updateuser/:id').put((req,res) => {
    userModel.findById(req.params.id, (err,user) => {
        try {
            user.name = req.body.name;
            user.age = req.body.age;
            user.phone = req.body.phone;
            user.save().then(() => {
            res.status(200).json({'user':'user detail updated'});
            });
        }
        catch {
            res.send('update failed', err);
        }
    });
});

// Delete user in mongodb
router.route('/deleteuser/:id').delete((req,res) => {
    userModel.findByIdAndRemove({ _id: req.params.id }, (err,user) => {
        try {
            res.status(200).json({'user': 'user deleted'});
        }
        catch {
            res.send('failed', err);
        }
    })
})

// exporting this file so we can use is it in another file
module.exports = router;