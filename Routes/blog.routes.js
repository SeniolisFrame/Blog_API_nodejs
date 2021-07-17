const express = require('express');
const router = express.Router();
const blogControllers = require('../Controllers/blog.controllers.js');
const checkJWT = require("../Middleware/checkJWT");

router.get('/getAllBlog',blogControllers.getAllBlog);
router.get('/getBlog/:id',blogControllers.getBlog);
router.post('/postBlog',checkJWT,blogControllers.postBlog);
router.post('/commentBlog',checkJWT,blogControllers.commentBlog);

module.exports = router;