// Create web server
// Run: node comments.js
// Access: http://localhost:3000

// Load modules
var express = require('express');

// Create web server
var app = express();

// Listen for requests
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// Add route for root
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Add route for comments
app.get('/comments', function(req, res) {
    res.send('This is a page for comments');
});

// Add route for comments with id
app.get('/comments/:id', function(req, res) {
    res.send('This is a page for comment with id ' + req.params.id);
});