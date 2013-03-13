
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , homepage = require('./routes/homepage')
  , projects = require('./routes/projects')
  , tools = require('./routes/tools')
  , hardware = require('./routes/hardware')
  , how_to = require('./routes/how_to')
  , about = require('./routes/about')
  , contact = require('./routes/contact')
  , d3test = require('./routes/d3test')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// GETS
app.get('/', homepage.display_welcome);
app.get('/projects', projects.main);
app.get('/tools', tools.main);
app.get('/d3test', d3test.display_test);
app.get('/users', user.list);
app.get('/how-to', how_to.main);
app.get('/about', about.main);
app.get('/contact', contact.main);

// PUTS
app.post('/ideas/new', projects.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
