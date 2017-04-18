var net = require('net');

var server = net.createServer();

var sockets = []; //需要向所有客户端广播用户数据，用来保存所有连接

server.on('connection', function (socket) {
   console.log('Got a new connection');
    sockets.push(socket); //存入sockets
    socket.on('data', function (data) {
        console.log('got data: ' + data);
        //广播数据
        sockets.forEach(function (otherSocket) {
            if( otherSocket !== socket ){
                otherSocket.write(data);
            }
        })
    });

    socket.on('close', function () {
        console.log('connection closed');
        var index = socket.indexOf(socket);
        socket.splice(index,1)
    })
});

server.on('error', function (err) {
    console.log('Server error: ' + err.message)
});

server.on('close', function () {
   console.log('Server closed')
});

server.listen(4001);