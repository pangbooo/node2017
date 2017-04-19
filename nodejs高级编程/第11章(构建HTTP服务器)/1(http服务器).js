/*var http = require('http');
var server = http.createServer();

server.on('request', function (req,res) {
    res.writeHead(200,{'Contnet-Type': 'text/plain'});
    res.write('Hello World');
    res.end()
});

server.listen(4000);*/

var util = require('util');
//简写
require('http').createServer(function (req,res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('url: ' + req.url + '\n' + 'method: ' + req.method + '\n' + 'header: ' + util.inspect(req.headers))
}).listen(4000);

