var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ data: { name: 'zxf4399', age: 27, sex: 1 } });
});

module.exports = router;
