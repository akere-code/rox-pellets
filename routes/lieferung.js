var express = require('express');
var router = express.Router();

router.get('/lieferung', (req, res, next) => {
  res.render('lieferung', { title: 'Rox Pellets - Lieferung' });
});

module.exports = router;