var server = require('net').createServer(function (socket) {
   console.log('new connection');

    socket.setEncoding('utf8');

    socket.write('hello you can start typing. Type "quit" to exit \n');

    socket.on('data', function (data) {
        console.log('Got: ' + data.toString());
        if(data.trim().toLowerCase() == 'quit'){
            socket.write('Bye bye');
            return socket.end();
        }
        socket.write(data);

    });
    socket.on('end', function(){
        console.log('Client connection ended')
    })
}).listen(4001);