let mongoose = require('mongoose');
let User = require('../models/user');
let crypto = require('crypto');

module.exports = function(router, mongoose){
    router.post('/reset-password/', (req, res) => {
        let newPassword = req.body.newPassword;
        let token = req.query.token;
        User.findOne({
            resetPasswordToken: token,
            resetPasswordTokenExpiry: {
                $gt: Date.now()
            }
        }, function(err, user){
                if(err){
                    console.log(err);
                    res.status(400).json({
                        errorCode: 'Reset Failed: Username not found or token expired'
                    });
                }
                else if(!err && user){
                    User.findByIdAndUpdate(user._id, {
                        password: newPassword
                    }, function(err){
                        if(err){
                            console.log(err);
                            res.status(500).json({
                                errorCode: errCode
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