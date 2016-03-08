// Create instance of Mongoose and connect to our local MongoDB database
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();
mongoose.connect('mongodb://localhost/data/db/');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));


// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

app.listen(8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

var entry = require('./models/entry');

// var newEntry = entry(
// {
// 	title: "title 1",
// 	content: "content 1",
// 	author: "me",
// });

// newEntry.save(function(err) {
// 	if (err) {
// 		console.log(err)
// 		} else {
// 			console.log('entry created!');
// 		}
// 	});

app.get("/", function (request, response) { 
	entry.find({}, function(err, results){
		console.log(results);
		response.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
         response.end(JSON.stringify(results));
	});
});

