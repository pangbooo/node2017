require('http').createServer(function (req,res) {
    var rs = fs.createReadStream('/path/to/big/file');

    rs.on('data', function (data) {
        if( !res.write(data) ){  //数据被存入队列 ，可读流暂定读取数据
            rs.pause();
        }
    });

    res.on('drain', function () {
       rs.resume();
    });

    rs.on('end', function () {
        res.end();
    })
}).listen(8080);