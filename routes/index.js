var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Magic Mirror',
    time: moment().format('H:mm'),
    day: moment().format('dddd MMM Do YYYY'),
    year: moment().format('YYYY')
  });
});




module.exports = router;
