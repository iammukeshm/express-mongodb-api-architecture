const userController = require('../../controllers/user');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
module.exports = router;