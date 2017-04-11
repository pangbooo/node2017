const  crypto =require('crypto');

const hash = crypto.createHash('md5');

//可任意多次调用updata();
hash.update('Hello World');
hash.update('Hello Nodejs');

console.log(hash.digest('hex'));//55eb656b30c925b98ed93d36399e6518

/*
 如果要计算SHA1，只需要把'md5'改成'sha1'，
 还可以使用更安全的sha256和sha512。
*/
