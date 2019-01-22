let config = require('../config.json');
let jwt = require('jsonwebtoken');

module.exports = {
    isLoggedIn: function(req, res, next){
        console.log(req.headers);
        let token = req.headers['authorization'] || req.headers['x-access-token'];
        token = token.slice(7, token.length);
        console.log(token);
        try{
            var decoded = jwt.verify(token, config.jwt.secret);
            console.log(decoded);
            return next();
        }
        catch(err){
            res.status(401).json({
                errorCode: err
            });
        }
    }
};
