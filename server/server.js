// Package imports
var fs = require('fs');
var path = require('path');
var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// View Engine
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
	fs.readFile(path, 'utf-8', callbacks);
})

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));


// Get DB credentials from environment variables
// var reader_usn = process.env.DEV_REPORTER_USN;
// var reader_pwd = process.env.DEV_REPORTER_PWD;
// var db_name = process.env.LOCAL_DB_NAME;

var reader_usn = process.env.MLAB_REPORTER_USN;
var reader_pwd = process.env.MLAB_REPORTER_PWD;
var db_name = process.env.MLAB_DB_NAME;

// Connect to MongoDB with read-only permission
// mongoose.connect(`mongodb://${reader_usn}:${reader_pwd}@localhost/${db_name}`);
mongoose.connect(`mongodb://${reader_usn}:${reader_pwd}@ds121248.mlab.com:21248/${db_name}`)

var db = mongoose.connection;

API route and controller
var apiController = require('./controllers/apiController');
apiController.courseAPI(app);
apiController.problemSetAPI(app);
apiController.problemAPI(app);

// Root route
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.use(function(req, res, next) {
	res.status(404).sendFile(path.join(__dirname, '../client/index.html'));
})

// Error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
})

module.exports = app;