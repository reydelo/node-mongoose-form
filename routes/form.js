var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  res.render('form', { title: 'My form title' });
});

/* Post form */
router.post('/', function(req, res) {
  console.log(req.body.comment);
  res.redirect('form');
});

module.exports = router;
