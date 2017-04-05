'use strict';

var fs = require('fs');

var wfs1 = fs.createWriteStream('output1.txt','utf-8');
wfs1.write('使用stream写入文本数据...\n');
wfs1.write('end');
wfs1.end();

var wfs2 = fs.createWriteStream('output2.txt');
wfs2.write(new Buffer('使用stream写入二进制数据...\n','utf-8'));
wfs2.write(new Buffer('End','utf-8'));
wfs2.end();
