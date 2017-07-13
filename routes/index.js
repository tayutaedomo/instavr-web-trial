var express = require('express');
var router = express.Router();

var title = 'InstaVR Web Embed Trial';


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


module.exports = router;

