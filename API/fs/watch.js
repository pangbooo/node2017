'use strict';

var fs = require('fs');

fs.watch('sample.txt', function (eventType, filename) {
    console.log('event: '+ eventType);
    console.log('filename: '+ filename)
});