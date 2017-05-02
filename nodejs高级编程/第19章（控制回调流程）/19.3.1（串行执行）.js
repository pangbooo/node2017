var async  = require('async');
var request  = require('request');

function done(err, results) {
    if(err){throw err};

    console.log('results: ' + results)
}

async.series([
    function (next) {
        request.post({
            url:'http://localhost:8080',
            body:'4'
        }, function (err,res,body) {
            next(err,body && JSON.parse(body))
        })
    },
    function (next) {
        request.post({
            url:'http://localhost:8080',
            body:'5'
        }, function (err,res,body) {
            next(err,body && JSON.parse(body))
        })
    }
],done);

async.series([
        function(callback) {
            // do some stuff ...
            callback(null, 'one');
        },
        function(callback) {
            // do some more stuff ...
            callback(null, 'two');
        }
    ],
// optional callback
    function(err, results) {
        // results is now equal to ['one', 'two']
    });