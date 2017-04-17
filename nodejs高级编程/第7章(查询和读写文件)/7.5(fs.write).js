var fs = require('fs');
fs.open('./test.txt', 'a',function (err,fd) {
    if(err){throw err}
    var writeBuffer = new Buffer('writing this string'),
        bufferPositon  = 0,
        bufferLength = writeBuffer.length,
        filePositon = null;
    fs.write(fd,writeBuffer,bufferPositon,bufferLength,filePositon, function (err,written) {
        if(err){throw err}
        console.log('wrote' + written + 'bytes')
    })
});