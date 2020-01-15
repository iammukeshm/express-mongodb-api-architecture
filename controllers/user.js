const express = require('express');
const userService = require('../services/user');
const router = express.Router()


router.post('/register', userService.registerUser);

router.post('/login', userService.login);

module.exports = router