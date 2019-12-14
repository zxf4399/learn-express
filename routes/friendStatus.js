var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  if (typeof req.body.subscribe === 'boolean') {
    res.send({ data: true });
  }

  res.send({ data: false });
});

module.exports = router;
