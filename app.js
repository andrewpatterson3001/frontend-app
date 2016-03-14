var express = require('express');
var app = express();
var path = require("path");

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/node_modules/jquery/dist/jquery.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.js');
});

app.get('/node_modules/underscore/underscore.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/underscore/underscore.js');
});

app.get('/node_modules/backbone/backbone.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/backbone/backbone.js');
});

app.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/app.js');
});

var server = app.listen(3000);