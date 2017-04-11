'use strict';

var url = require('url');
var path = require('path');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

//url.parse (urlString ---> urlObj)

//url.format (urlObj ---> urlString)

//解析当前目录
var workDir = path.resolve('.');

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir,'pub','index.html');

