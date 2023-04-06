const express = require('express');
const router = express.Router();
const loginsignupController = require('../app/controllers/LoginSignupController')

router.get('/login', loginsignupController.login)
router.get('/signup', loginsignupController.signup)
router.post('/list', loginsignupController.listed)

module.exports = router;