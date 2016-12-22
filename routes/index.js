var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/view-image.html', function(req, res, next) {
  res.render('public/view-image', { title: 'Express' });
});

module.exports = router;
