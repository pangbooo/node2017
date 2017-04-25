var net = require('net');
var port = 4000;
var host = 'www.baidu.com';//默认localhost
var conn = net.createConnection(port, host, function () {
    console.log('we hace a new connection')
});

//conn ===> net.socket类的一个实例。 (既是一个可读流，也是一个可写流)
conn.write('hey', function () {
    console.log('data was written out')
});

conn.on('data', function (data) {
    console.log('some data has arrived: ' + data)
});

//终止连接
conn.end('bye bye','uft8');