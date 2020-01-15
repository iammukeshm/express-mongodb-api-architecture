const productController = require('../../controllers/product');
const userController = require('../../controllers/user');

const express = require('express');
let router = express.Router();
router.use('/product', productController);
router.use('/account', userController);
module.exports = router;