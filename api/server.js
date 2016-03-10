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
// 	title: "testing this",
// 	content: "content 1",
// 	author: "me",
// 	tags: "Australia",

// });

// newEntry.save(function(err) {
// 	if (err) {
// 		console.log(err)
// 		} else {
// 			console.log('entry created!');
// 		}
// 	});

//endpoint: http://localhost:8080/
app.get("/api/entries", function (request, response) { 
	entry.find({}, function(err, results){
		console.log(results);
		response.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
         response.end(JSON.stringify(results));
	});
});

// add new entry
app.post("/api/entries", function (request, res) { 
	request.body.title
	var newEntry = entry(
		{
			title: request.body.title,
			content: request.body.content,
			author: request.body.author,
			tags: request.body.tags,

		});

	newEntry.save(function(err) {
		if (err) {
			console.log(err)
			} else {
				console.log('created!');
				res.send('entry created!');
			}
		});

});

// find blog post by id
app.get('/entries/:id', function(req, res){
	entry.find({"_id": req.params.id}, function(err, entry){
		if (err){
			console.log(err);	
		} else {
			res.json(entry);
		}
	});
});

// delete entry
app.delete('/entries/:id', function(req, res){
	entry.find({'_id': req.params.id}, function(err, entry){
		console.log('delete');
		if(err){
			console.log(err);
		} else {
			entry[0].remove(function(err){
				if(err){
					console.log(err);
				} else {
					console.log(entry);
				}
			});
		}
	})
});
