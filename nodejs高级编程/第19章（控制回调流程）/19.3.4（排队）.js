var async = require('async'),
    request = require('request');

function done(err, results) {
    if(err){throw err}

     console.log('results: ' + results)
}

var maximumConcurrency = 5;

function worker(task, callback) {
    request.post(
        {url:'http://localhost:8080',body:JSON.stringify(task)}, function (err, res, body) {
        callback(err, body && JSON.parse(body))
    });

}

var queue = async.queue(worker, maximumConcurrency);

[1,2,3,4,5,6,7,8,9,10].forEach(function (i) {
   queue.push(i, function (err, result) {
       if(err){throw err}

       console.log(i + '^2 = ' + result)
   })
});

queue.saturated = function () {
  console.log('queue us staturated')
};

queue.empty = function () {
    console.log('queue us empty')
};

queue.drain = function () {
    console.log('queue us drain')
};