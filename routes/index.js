var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InstaVR Web Embed Trial' });
});

router.get('/web_embed', function(req, res, next) {
  res.render('web_embed');
});

module.exports = router;

