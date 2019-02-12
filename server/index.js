let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let routes = require('./routes');
bodyParser.urlencoded({extended: true});

app.use(bodyParser.json());

app.use('/api/', routes);

app.listen(8080, function(){
    console.log("Listening on port 8080")
}); 