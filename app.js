var express = require('express')
	, path = require('path')
	, favicon = require('serve-favicon')
	, methodOverride = require('method-override')
	, logger = require('morgan')
	, cookieParser = require('cookie-parser')
  	, bodyParser = require('body-parser')
  	, fs = require('fs')
  	, http = require('http')
  	, https = require('https');

var router = express.Router();

module.exports = function(){
	var self = this;

	// register routes
	self.createRoutes = function() {
        
        /////////////////////
        // Main Controller //
        /////////////////////
        var route = require('./'+config.sys.model+'/index');
        self.app.use('/', route);
        
        ////////////////////////////////
        // last resort: 404 Not Found //
        ////////////////////////////////
        self.app.all('*', function(req, res){
             res.status(404);
             res.render('static/404', { title: config.site.title, user: req.user });
        });
        
    };
	
	// initial the server
	self.initializeServer = function() {
		self.app = express();
		self.app.set('views', path.join(__dirname, config.sys.views));
		self.app.set('view engine', 'jade');
		//self.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
		self.app.use(logger('dev'));
		self.app.use(methodOverride());
		self.app.use(bodyParser.json());
		self.app.use(bodyParser.urlencoded({ extended: false }));
		self.app.use(cookieParser());
		self.app.use(express.static(path.join(__dirname, config.sys.static)));
		self.createRoutes();
	};
	
	 self.start = function(callback) {
        
        self.initializeServer();
        
        // Start Server
        if (config.site.https) {
            self.http = https.createServer({
                    key: config.site.key,
                    cert: config.site.crt
                }, self.app).listen(config.site.port, config.site.host, function() {
                    console.log('%s: Secure server started on port %d ...', Date(Date.now()), config.site.port);
            });
        } else {
            self.http = http.createServer(self.app).listen(config.site.port, config.site.host, function() {
                console.log('%s: Server started on port %d ...', Date(Date.now()), config.site.port);
            });
        }
   
        if (typeof callback == 'function') callback();
    }
}

