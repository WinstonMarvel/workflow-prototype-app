let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let routes = require('./routes');
const path = require('path');
bodyParser.urlencoded({extended: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/', routes);
app.use('/', express.static(path.join(__dirname, 'public')) );
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});


app.listen(8080, function(){
    console.log("Listening on port 8080")
}); 