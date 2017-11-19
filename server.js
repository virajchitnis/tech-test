const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// Connection to MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TechTest', function(err) {
	if(err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/items', require('./routes/items'));

app.get('/', function (req, res){
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(port);
console.log("Server started on port " + port);
