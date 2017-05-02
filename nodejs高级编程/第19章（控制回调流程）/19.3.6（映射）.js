var async = require('async'),
    request = require('request');

function done(err,results) {
    if(err){throw err}

    console.log('done! results: ' + results)
}

var collection = [1,2,3,4];

function iterator(value,callback) {
    request.post({
        url:'http://localhost:8080',
        body:JSON.stringify(value)
    }, function (err, res, body) {
       callback(err, body && JSON.parse(body))
    })
}

async.map(collection, iterator, done);

