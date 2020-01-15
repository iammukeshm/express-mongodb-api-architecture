const express = require('express');
const productService = require('../services/product');
const auth = require('../middlewares/auth');
let router = express.Router();

router.get('/',auth, productService.getProducts);

router.get('/:id', productService.getProductById);

router.post('/', productService.createProduct);

router.put('/:id', productService.updateProduct);

router.delete('/:id', productService.deleteProduct);

module.exports = router;