'use strict';

var fs = require('fs');

var data = 'hello node.js';
fs.writeFileSync('output.txt',data);
