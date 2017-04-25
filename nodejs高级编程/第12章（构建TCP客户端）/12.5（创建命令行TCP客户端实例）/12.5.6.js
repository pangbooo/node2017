var net  = require('net');
var port = 4000;
var quitting = false;
var  conn;

var retryTimeout = 3000;
var retriedTimes = 0;
var maxRetries = 10;

process.stdin.resume();

process.stdin.on('data', function (data) {
    if(data.toString().trim().toLowerCase() === 'quit'){
        quitting = true;
        console.log('quitting');
        conn.end();
        process.stdin.pause();
    }else{
        conn.write(data)
    }
});

(function connect() {
    function reconnect() {
        if( retriedTimes >= maxRetries ){
            throw new Error('max retries have been exceeded, i give up')
        }
        retriedTimes += 1;
        setTimeout(connect,retryTimeout);
    }

    conn = net.createServer(port);
    conn.on('connect', function () {
        retriedTimes = 0;
        console.log('connected to server');
    });

    conn.on('error', function (err) {
        console.log('Error in connection:' + err)
    });

    conn.on('close', function () {
        if( !quitting ){
            console.log('connection got colse');
            reconnect();
        }
    });

    conn.pipe(process.stdout,{end:false})

})();