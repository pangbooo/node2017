var net = require('net');
var port = 4000;
var conn = net.createConnection(port);

conn.on('connect', function () {
    console.log('connected to server')
});

conn.on('error', function (err) {
   console.log('Error in connection: ' + err)
});