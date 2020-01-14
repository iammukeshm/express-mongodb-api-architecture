const productController = require('../../controllers/product');

const express = require('express');
let router = express.Router();
router.use('/product', productController);
module.exports = router;