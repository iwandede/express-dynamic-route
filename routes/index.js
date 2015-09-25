var fs = require('fs')
  , express = require('express')
  , router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This Is index page' });
});

// sub routes
fs.readdirSync(__dirname + '/').forEach(function(file) {
    if (file == "index.js") return;
    var name = file.substr(0, file.indexOf('.')) || file;
    var route = require('./' + name);
    if(name!='') router.use('/' + name, route);
});

module.exports = router;