var express = require('express');
var router = express.Router();
var mainController = require("../controller/index")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', mainController.registerUser);
router.post('/bookcab', mainController.bookCab);

module.exports = router;
