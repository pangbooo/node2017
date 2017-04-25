var net = require('net');
var port = 4000;
var host = 'www.baidu.com';//默认localhost
var con = net.createConnection(port, host, function () {
    console.log('we hace a new connection')
});