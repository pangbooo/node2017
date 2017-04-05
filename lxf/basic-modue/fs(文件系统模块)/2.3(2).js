'use strict';

var fs = require('fs');

var stat = fs.statSync('sample.txt');

console.log(stat.size);