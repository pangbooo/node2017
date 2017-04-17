var spawn = require('child_process').spawn;

process.on('SIGUSR2', function () {
    console.log('got a SIGUSR2 signal')
});

//以命令ls dose_not_exit.txt创建子进程
var child = spawn('node',['dose_not_exit.txt']);



//当子进程退出时
child.on('exit', function (code,signal) {
    if( code ){
        console.log('child process terminated with code ' + code)
    }else{
        console.log('child process terminated with signal ' + signal)
    }
});
