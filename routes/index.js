var express = require('express');
var router = express.Router();

var title = 'InstaVR Web Sandbox';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/web_embed_local', function(req, res, next) {
  res.render('web_embed_local', { title : 'Web Embed | ' + title });
});

router.get('/embed/:view', function(req, res) {
  res.render('embed/' + req.params.view, { title : req.params.view + ' | ' + title });
});

router.get('/signup/:view', function(req, res) {
  res.render('signup/' + req.params.view, { title : req.params.view + ' | ' + title });
});

router.get('/dev/:view', function(req, res) {
  res.render('embed_dev/' + req.params.view, { title : req.params.view + ' | ' + title });
});

router.get('/webzip_dev/:view', function(req, res) {
  res.render('webzip_dev/' + req.params.view, { title : req.params.view + ' | ' + title });
});


module.exports = router;

