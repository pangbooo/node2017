require('net').createServer(function (socket) {
    //新连接
    
    socket.on('data', function (data) {
        //获取数据
    });
    
    socket.on('end', function () {
        //关闭连接
    });

    socket.write('some string')
    
}).listen(4001);