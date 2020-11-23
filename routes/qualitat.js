var express = require('express');
var router = express.Router();

router.get('/qualitat', (req, res, next) => {
  res.render('qualitat', { title: 'Rox Pellets - Qualität' });
});

module.exports = router;