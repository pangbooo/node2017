var fs = require('fs');

function cascade(callbacks, callback) {

    //复制数组
    var functions = callbacks.slice(0);

    function processNext(err) {

        if(err){return callback(err)}

        var args = Array.prototype.slice.call(arguments);

        console.log(args)

        var func = functions.shift();

        if(func){
            //删除包含错误的第一个参数
            args.shift();
        }else{
            func = callback;
        }

        args.push(processNext);

        func.apply(this, args);
    }
    processNext.call(this)
}

function append_some_a_to_b(callback) {

    var aFd, bFd,
        buffer = new Buffer(10);

    cascade([
        function open_a() {
            fs.open('a.txt', 'r', next)
        },

        function read_from_a(err, fd) {
            aFd = fd;
            fs.read(aFd, buffer, 0, buffer.length, 0, next)
        },

        function close_a(err) {
            fs.close(aFd, next)
        },

        function open_b() {
            fs.open('b.txt','a', next)
        },

        function stat_b(err,fd) {
            bFd = fd;
            fs.fstat(bFd, next)
        },

        function write_b(err,bStats) {
            fs.write(bFd, buffer, 0, buffer.length,bStats.size, next)
        },

        function close_b(err) {
            fs.close(bFd,next)
        },
    ],callback);

}
console.log('starting...');

append_some_a_to_b(function done(err) {
    if(err){throw err};
    console.log('done')
});