var express = require('express');
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

app.use(require('body-parser')());
app.use( require('cookie-parser')(credentials.cookieSecret()));
app.use(require('express-session')());

app.use(function (req,res,next) {
   //如果又即显消息，吧他传到上下文中，然后清除他
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});

app.post('/newsletter', function (req,res) {
    var name = req.body.name || '',
        email = req.body.email || '';
    //输入验证
    if( !email.match(VALID_EMAIL_REGEX)){
        if(req.xhr){
            return res.json({error:'Invalid name email address'})
        }
        req.session.flash = {
            type: 'danger',
            intro: 'Validation error!',
            message: 'The email address you entered was not valid.',
        };
        return res.redirect(303, '/newsletter/archive');
    }

    new NewsletterSignup({ name: name, email: email }).save(function(err){
        if(err) {
            if(req.xhr) return res.json({ error: 'Database error.' });
            req.session.flash = {
                type: 'danger',
                intro: 'Database error!',
                message: 'There was a database error; please try again later.',
            }
            return res.redirect(303, '/newsletter/archive');
        }
        if(req.xhr) return res.json({ success: true });
        req.session.flash = {
            type: 'success',
            intro: 'Thank you!',
            message: 'You have now been signed up for the newsletter.',
        };
        return res.redirect(303, '/newsletter/archive');
    });
});


app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + ';')
});
