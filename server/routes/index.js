let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let config = require('../config.json');

let db = mongoose.connect(config.db.url);

let postRoutes = require('../routes/posts')(router, mongoose);
let loginRoutes = require('../routes/login')(router, mongoose);
let passwordResetRoutes = require('../routes/passwordReset')(router, mongoose);
router.use('/public/', express.static('public'));

module.exports = router;