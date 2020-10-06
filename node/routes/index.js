var express = require("express");
var router = new express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: req.headers.host });
});

module.exports = router;
