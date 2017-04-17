var exec = require('child_process').exec;

//执行 "cat *.js | wc -1"

exec('cat *.js | wc -1', function (err,stdout,stderr) {
   if(err){
       console.log('child process exited with error code' + err.code);
       return;
   }
   console.log(stdout);//命令的输出信息
   console.log(stderr);//命令的错误输出信息
});

