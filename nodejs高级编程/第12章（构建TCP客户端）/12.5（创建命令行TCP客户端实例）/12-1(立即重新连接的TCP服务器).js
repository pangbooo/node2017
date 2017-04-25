var net = require('net');
var port = 4000;
var conn;

process.sdtin.resume();

(function connect() {
    conn = net.createServer(port);

    conn.on('connect', function () {
        console.log('connected to server')
    });

    conn.on('error', function (err) {
        console.log('Error in connextion:' + err)
    });

    conn.on('close', function () {
        console.log('connection got closed,will try to reconnect');
        connect();
    });

    conn.pipe(process.stdout, {end:false}); //打印服务器消息
    process.stdin.pipe(conn); //向服务器发送命令行
})();