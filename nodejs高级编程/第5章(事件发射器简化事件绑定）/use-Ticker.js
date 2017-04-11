var Ticker = require('./Ticker');

var ticker = new Ticker();
ticker.on('tick', function () {
   console.log('tick')
});