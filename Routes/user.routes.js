const express = require('express');
const router = express.Router();
const usersControllers = require('../Controllers/users.controllers.js');
const checkJWT = require("../Middleware/checkJWT");

router.post('/register',usersControllers.register);
router.post('/login',usersControllers.login);
router.get('/getProfile',checkJWT,usersControllers.getProfile);
router.get('/viewProfile/:id',usersControllers.viewProfile);

module.exports = router;