var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Rox Pellets - Home'});
});

module.exports = router;
