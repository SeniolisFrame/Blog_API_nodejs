const express = require('express');
const router = express.Router();
const usersControllers = require('../Controllers/users.controllers.js');
const checkJWT = require("../Middleware/checkJWT");

router.post('/signup',usersControllers.signup);
router.post('/login',usersControllers.login);
router.get('/getProfile',checkJWT,usersControllers.getProfile);

module.exports = router