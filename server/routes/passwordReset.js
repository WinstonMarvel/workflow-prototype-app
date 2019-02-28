let mongoose = require('mongoose');
let User = require('../models/user');
let crypto = require('crypto');
let isLoggedIn =  require('./middleware').isLoggedIn;
let bcrypt = require('bcrypt-nodejs');

module.exports = function(router, mongoose){
    router.post('/reset-password/', isLoggedIn, (req, res) => {
        let newPassword = req.body.password;
        // let token = req.query.token;
        User.findOne({
            email: req.user
            // resetPasswordTokenExpiry: {
            //     $gt: Date.now()
            // }
        }, function(err, user){
                if(err){
                    console.log(err);
                    res.status(400).json({
                        errorCode: 'Reset Failed: Username not found or token expired'
                    });
                }
                else if(!err && user){
                    User.findByIdAndUpdate(user._id, {
                        password: bcrypt.hashSync(newPassword)
                    }, function(err){
                        if(err){
                            console.log(err);
                            res.status(500).json({
                                errorCode: errCode
                            });
                        }
                        else{
                            res.status(200).json({
                                status: 'Success'
                            });  
                        }
                    });
                }
        });
    });

    router.get('/reset-password/', (req, res) => {
        let username = req.query.username;
        let tokenExpiry = Date.now() + 900000;
        crypto.randomBytes(20, function(err, token){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                });
            }
            else{
                User.findOneAndUpdate({ _id: req.body.email }, { 
                     resetPasswordTokenExpiry : tokenExpiry,
                     resetPasswordToken: token
                 }, function(err){
                    if(err){
                        console.log(err);
                        res.status(500).json({
                            errorCode: err
                        });
                    }
                    else{
                        res.status(200).json({
                            status: 'Successfully sent reset token'
                        });
                    }
                });
            }
        });
    });
};