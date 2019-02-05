let User = require('../models/user');
let config = require('../config.json');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt-nodejs');
let isLoggedIn = require('./middleware').isLoggedIn;

module.exports = function(router, mongoose){
    
    router.post('/signup/', (req, res) => {
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });
        User.findOne({email: req.body.email}, function(err, user){
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
        let password = req.body.password;
        if( req.body.email && password ){
            User.findOne({email: req.body.email}, function(err, user){
                bcrypt.compare(password, user.password, function(err, match) {
                    if(match){
                        console.log("Auth success");
                        let token = jwt.sign({ user: req.body.email }, config.jwt.secret);
                        res.status(200).json({ token: token });
                    }
                    else{
                        console.log("fail");
                        res.status(401).json({
                            errorCode: 'E-mail or password incorrect'
                        });
                    }
                });
            });
        }
        else{
            res.status(400).json({
                errorCode: 'E-mail or password field is empty'
            });
        }
    });

    router.get('/protected', isLoggedIn, (req, res) => {
        res.status(200).json({
            "success": "sucess"
        });
    });
};
