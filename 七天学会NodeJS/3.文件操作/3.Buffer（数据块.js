//Buffer 类在 Node.js 中是一个全局变量，因此无需 require('buffer').Buffer。

//全局构造函数Buffer来提供对二进制数据的操作

var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(bin[0]);

var str = bin.toString('utf-8');

    bin = new Buffer('hello','utf-8');





