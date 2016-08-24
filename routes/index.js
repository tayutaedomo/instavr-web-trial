var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InstaVR Web Embed Trial' });
});

router.get('/web_embed', function(req, res, next) {
  res.render('web_embed');
});

router.get('/web_embed_2', function(req, res, next) {
  res.render('web_embed_2');
});

router.get('/web_embed_2-1', function(req, res, next) {
  res.render('web_embed_2-1');
});

router.get('/web_embed_2-2', function(req, res, next) {
  res.render('web_embed_2-2');
});

router.get('/web_embed_3', function(req, res, next) {
  res.render('web_embed_3');
});

router.get('/web_embed_4', function(req, res, next) {
  res.render('web_embed_4');
});

module.exports = router;

