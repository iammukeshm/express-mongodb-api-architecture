const express = require('express');
const userService = require('../services/user');
const router = express.Router()
const auth = require('../middlewares/auth');

router.post('/register', userService.registerUser);

router.post('/login', userService.login);


router.get('/me', auth, userService.userProfile);

module.exports = router