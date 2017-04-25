var net = require('net');
var port = 4000;
var conn;

var retryInterval = 3000;
var retriedTimes = 0;
var maxRetries = 10;

process.sdtin.resume();

(function connect() {
    function reconnect(){
        if( retriedTimes >= maxRetries){
            throw new Error('Max retries have been exceeded,i give up.')
        }
        retriedTimes += 1;
        setTimeout(connect,retryInterval);

    }

    conn = net.createConnection(port);

    conn.on('connect', function () {
        retriedTimes = 0;
        console.log('connected to server')
    });

    conn.on('error', function () {
        console.log('Error in connecxtion:' + err)
    });

    conn.on('close', function () {
        console.log('connection got close, will try to reconnect');
        reconnect();
    });

    process.stdin.pipe(conn,{end:false});
})();