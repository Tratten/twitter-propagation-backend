var express = require('express');
var router = express.Router();


var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello world');
});

module.exports = router;
