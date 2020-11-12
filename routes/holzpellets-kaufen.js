var express = require('express');
var router = express.Router();

router.get('/holzpellets-kaufen', function(req, res, next) {
  
    res.render('holzpellets-kaufen', { title: 'Rox Pellets - Holzpellets Kaufen'});

});

module.exports = router;
