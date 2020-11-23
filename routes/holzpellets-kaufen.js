var express = require('express');
var router = express.Router();

router.get('/holzpellets-kaufen', (req, res, next) => {
  
    res.render('holzpellets-kaufen', { title: 'Rox Pellets - Holzpellets Kaufen'});

});

module.exports = router;
