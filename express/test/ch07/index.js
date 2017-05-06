var express = require('express');
var app = express();

// 设置 handlebars 视图引擎
var handlebars = require('express-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//指派静态目录
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3001);

function getWeatherData(){
    return {
        locations: [
            {
                name: 'Portland',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Overcast',
                temp: '54.1 F (12.3 C)',
            },
            {
                name: 'Bend',
                forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather: 'Partly Cloudy',
                temp: '55.0 F (12.8 C)',
            },
            {
                name: 'Manzanita',
                forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather: 'Light Rain',
                temp: '55.0 F (12.8 C)',
            },
        ],
    };
}


app.use(function(req, res, next){
    //res.locals 是一个对象,包含用于渲染视图的默认上下文。
    if(!res.locals.partialsPb) res.locals.partialsPb = {};
    res.locals.partialsPb.weatherContextPb = getWeatherData();
    next();
});


app.get('/', function (req,res) {
    res.render('home');
});

app.get('/test', function (req,res) {
    res.render('test');
});
app.get('/jquery-test', function (req,res) {
    res.render('jquery-test');
});
app.get('/nursery-rhyme', function(req, res){
    res.render('nursery-rhyme');
});
app.get('/data/nursery-rhyme', function(req, res){
    res.json({
        animal: 'squirrel',
        bodyPart: 'tail',
        adjective: 'bushy',
        noun: 'heck',
    });
});
app.listen(app.get('port'), function () {
   console.log('Express started on http://localhost:' + app.get('port') + ';')
});


