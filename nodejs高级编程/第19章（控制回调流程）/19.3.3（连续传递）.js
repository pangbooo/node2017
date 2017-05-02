var async  = require('async');
var request  = require('request');

function done(err, res, body) {
    if(err){throw err}
    console.log('3^4=: ' + body)
}

async.waterfall([
    function (next) {
        request.post({
            url:'http://localhost:8080',
            body:'3'
        },next)
    },
    function (res,body,next) {
        request.post({
            url:'http://localhost:8080',
            body:body
        }, next)
    }
],done);