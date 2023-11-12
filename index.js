// run `node index.js` in the terminal
var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
});