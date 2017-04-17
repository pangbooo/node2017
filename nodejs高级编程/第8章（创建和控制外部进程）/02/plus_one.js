//解除 stdin流的暂停状态

process.stdin.resume();
process.stdin.on('data', function (data) {
    var number;
    try{
        //将输入数据解析为一个数
        number = parseInt(data.toString(), 10);
        //+1
        number += 1;

        //输出加1后的数
        process.stdout.write(number + '\n');
    }catch (err){
        process.stderr.write(err.message + '\n')
    }
});