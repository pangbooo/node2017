var spawn = require('child_process').spawn;

var child = spawn('tail', ['-f','/var/log/stytem.log']);

//监听子进程的输出数据
child.stdout.on('data', function (data) {
   console.log('tail output:' + data)
});

child.stderr.on('data', function (data) {
   console.log('tail error output:' + data)
});
