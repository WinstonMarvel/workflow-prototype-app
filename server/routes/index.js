let router = require('express').Router();
let mongoose = require('mongoose');
let config = require('../config.json');

let db = mongoose.connect(config.db.url);

let postRoutes = require('../routes/posts')(router, mongoose);
let loginRoutes = require('../routes/login')(router, mongoose);

module.exports = router;