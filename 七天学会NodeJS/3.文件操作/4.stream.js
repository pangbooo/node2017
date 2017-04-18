var fs = require('fs');

var rs = fs.createReadStream(path);
rs.on('data', function (chunk) {
    dosomething(chunk)
});

