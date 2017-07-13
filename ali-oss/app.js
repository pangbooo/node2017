var co = require('co');
var OSS = require('ali-oss');
var fs = require('fs');

var client = new OSS({
    region : 'oss-cn-beijing',
    accessKeyId: 'LTAIxUcHQaICM3FD',
    accessKeySecret: 'NAII5ZJIYFSPQ4ioZAqjIrgw49yCaP '
});

//查看Bucket列表
co(function* () {
    var result = yield client.listBuckets();
    //console.log(result);
}).catch(function (err) {
    console.log(err);
});

//查看文件列表
co(function* () {
    client.useBucket('ecc-product');
    var result = yield client.list({
        'max-keys': 5
    });
    //console.log(result);
}).catch(function (err) {
    console.log(err);
});

//上传一个文件
//co(function* () {
//    client.useBucket('ecc-product');
//    var result = yield client.put('goodsuploads/goods-entering.jpg', 'goods-entering.jpg');
//    console.log(result);
//}).catch(function (err) {
//    console.log(err);
//});

//下载一个文件
//co(function* () {
//    var result = yield client.get('goodsuploads/goods-entering.jpg', 'goods-entering2.jpg');
//    console.log(result);
//}).catch(function (err) {
//    console.log(err);
//});

//删除一个文件
//co(function* () {
//    var result = yield client.delete('goodsuploads/goods-entering.jpg');
//    console.log(result);
//}).catch(function (err) {
//    console.log(err);
//});

//流式上传
co(function* () {
    // use 'chunked encoding'
    var stream = fs.createReadStream('goods-entering.jpg');
    var result = yield client.putStream('attachment/goods-entering.jpg', stream);
    console.log(result);
    // don't use 'chunked encoding'
    //var stream = fs.createReadStream('local-file');
    //var size = fs.statSync('local-file').size;
    //var result = yield client.putStream(
    //    'object-key', stream, {contentLength: size});
    //console.log(result);
}).catch(function (err) {
    console.log(err);
});
