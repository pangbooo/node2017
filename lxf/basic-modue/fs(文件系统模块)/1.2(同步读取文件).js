'use strict';

var fs = require('fs');

try{
	var data = fs.readFileSync('sample2.txt','utf-8');
	console.log(data);
}catch(err){

}
