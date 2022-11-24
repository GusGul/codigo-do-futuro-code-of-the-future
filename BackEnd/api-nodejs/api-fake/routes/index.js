const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ProductsController = require("../controllers/productsController")

/* GET home page. */
/* por ter removido as views, isso será alterado
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
router.get('/', HomeController.index);

router.get('/products', ProductsController.index);
router.post('/products', ProductsController.create);
router.get('/products/:id', ProductsController.show);
router.delete('/products/:id', ProductsController.delete);
router.put('/products/:id', ProductsController.update);

module.exports = router;
