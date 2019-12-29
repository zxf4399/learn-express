var express = require("express");
var router = express.Router();

router.post("/", function(req, res) {
  res.send({ isOnline: !!req.body.subscribe, friendId: req.body.friendId });
});

module.exports = router;
