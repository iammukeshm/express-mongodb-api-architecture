const express = require('express');
const productService = require('../services/product');
let router = express.Router();

router.get('/', productService.getProducts);

router.get('/:id', productService.getProductById);

router.post('/', productService.createProduct);

router.put('/:id', productService.updateProduct);

router.delete('/:id', productService.deleteProduct);

module.exports = router;