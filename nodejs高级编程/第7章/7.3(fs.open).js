var fs = require('fs');

fs.open('./test.txt','r', function (err,fd) {
    if( err ){
        console.log(err)
    }else{
        console.log(fd)
    }
});