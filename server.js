var express = require('express');
var path = require("path");
var php = require("node-php");
var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('index');
// });

app.get('/css', function(req, res) {
    res.sendFile(__dirname + '/public/css/style.css');
})

app.use("/", php.cgi(__dirname+"/wordpress"));

app.listen(port, function() {
    console.log('My app is running on http://localhost:' + port);
});
