var spawn = require('child_process').spawn;

//Spawn the child with a 'ls  -la' command
var child = spawn('ls', ['-la']);

child.stuout.on('data', function (data) {
   console.log('data from child: ' + data)
});


//当子进程退出时
child.on('exit', function (code) {
    console.log('child process terminated with code ' + code)

});