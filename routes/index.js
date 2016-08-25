var express = require('express');
var router = express.Router();

var title = 'InstaVR Web Embed Trial';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/web_embed', function(req, res, next) {
  res.render('web_embed', { title : 'Web Embed | ' + title });
});

router.get('/web_embed_2', function(req, res, next) {
  res.render('web_embed_2', { title : 'Web Embed 2 | ' + title });
});

router.get('/web_embed_2-1', function(req, res, next) {
  res.render('web_embed_2-1', { title : 'Web Embed 2-1 | ' + title });
});

router.get('/web_embed_2-2', function(req, res, next) {
  res.render('web_embed_2-2', { title : 'Web Embed 2-2 | ' + title });
});

router.get('/web_embed_3', function(req, res, next) {
  res.render('web_embed_3', { title : 'Web Embed 3 | ' + title });
});

router.get('/web_embed_4', function(req, res, next) {
  res.render('web_embed_4', { title : 'Web Embed 4 | ' + title });
});

router.get('/web_embed_5', function(req, res, next) {
  res.render('web_embed_5', { title : 'Web Embed 5 | ' + title });
});


module.exports = router;

