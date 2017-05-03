var connect = require('connect');

//导入中间件
var helloWorld = require('./hello_world');

var app = connect.createServer(helloWorld);

app.listen(8080);