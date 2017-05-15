var express = require('express');
var app = express();
var http = require('http');

//app.set('env', 'production');
app.set('port', process.env.PORT || 3001);

http.createServer(app).listen(app.get('port'), function () {
   console.log('express started in ' + app.get('env'))
});