let mongoose = require('mongoose');
let User = require('../models/user');
let config = require('../config.json');
let jwt = require('jsonwebtoken');

module.exports = function(router, mongoose){

    router.post('/signup/', (req, res) => {
        let newUser = new user(req.body);
        user.findOne({$or:[{username: req.body.username}, {_id: req.body.email}]}, function(err, user){
            if(err){
                res.status(500).json({
                    errorCode: err
                });
            }
            else if(user){
                res.status(400).json({
                    errorCode: 'Username or email ID is not unique'
                });
            }
            else{
                newUser.save(newUser, (err, newUser) => {
                    if(err){
                        res.status(500).json({
                            errorCode: err
                        });
                    }
                    else{
                        res.status(200).json({ username: newUser });
                    }
                });
            }
        });
    });
    
    router.post('/login/', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        console.log(username);
        console.log(req.params);
        if(username == 'winston' &&  password == 'test'){
            let token = jwt.sign({ user: username }, config.jwt.secret);
            res.status(200).json({ token: token });
        }
        else{
            res.status(401).json({ errorCode: 'Unauthorized' });
        }
    });

    router.get('/protected', (req, res) => {
        let token = req.headers['authorization'] || req.headers['x-access-token'];
        token = token.slice(7, token.length);
        try{
            var decoded = jwt.verify(token, config.jwt.secret);
            console.log(decoded);
            res.status(200).json(decoded);
        }
        catch(err){
            res.status(401).json({
                errorCode: err
            });
        }
    });
};