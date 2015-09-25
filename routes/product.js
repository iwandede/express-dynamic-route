var fs = require('fs')
  , express = require('express')
  , router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('product', { title: 'OKE INI HALAMAN PRODUK' });
});

module.exports = router;
