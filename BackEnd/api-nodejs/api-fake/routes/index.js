const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")

/* GET home page. */
/* por ter removido as views, isso será alterado
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
router.get('/', HomeController.index);

module.exports = router;
