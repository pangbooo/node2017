
//方法1
var timeout  = 60000;
socket.setTimeOut(timeout);

socket.on('timeout', function () {
    socket.write('idle timeout,disconnected, bye');
    socket.end()
});


//方法2
socket.setTimeout(60000,function () {
    socket.end('idle timeout,disconnected, bye')
});