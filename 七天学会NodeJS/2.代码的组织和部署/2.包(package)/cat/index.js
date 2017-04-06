//当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径
//因此接着上例，以下两条语句等价。
/*
 var cat = require('/home/user/lib/cat');
 var cat = require('/home/user/lib/cat/index');

*/

var head  = require('./head');
var body  = require('./body');

module.exports = function(name){
  return {
      name : name,
      head : head.create,
      body : body.create
  };
};