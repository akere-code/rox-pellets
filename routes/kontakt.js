var express = require('express');
var router = express.Router();

router.get('/kontakt', (req, res, next) => {
  res.render('kontakt', { title: 'Rox Pellets - Kontakt' });
});
module.exports = router;