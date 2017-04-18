require('net').createServer(function (socket) {
    var rs = require('fs').createReadStream('./hello.txt');
    rs.pipe(socket);
    socket.on('data', function (data) {
        console.log(data.toString())
    })
}).listen(4001);