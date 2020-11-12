var express = require('express');
var router = express.Router();

router.get('/sackware', function(req, res, next) {
  res.render('sackware', { title: 'Rox Pellets - Sackware' });
});

module.exports = router;
