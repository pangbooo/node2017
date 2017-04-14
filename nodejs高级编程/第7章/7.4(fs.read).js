var fs = require('fs');

fs.open('./test.txt','r', function (err,fd) {
    if(err){ throw err}
    var readBuffer = new Buffer(1024), //存放数据
        bufferOffset = 0,
        bufferLenght = readBuffer.length,
        filePosition = 0;
    fs.read(fd,readBuffer,bufferOffset,bufferLenght,filePosition, function (err,readBytes) {
        if(err){throw err}
        console.log('just read' + readBytes + 'butes');
        if(readBytes > 0){
            console.log(readBuffer.slice(0,readBytes));
        }
    })
});