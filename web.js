var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});