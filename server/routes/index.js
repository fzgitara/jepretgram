const express = require('express');
const router = express.Router();
const { createPost, showAllPost } = require('../controllers/posts')

router.get('/', showAllPost)
router.post('/add', createPost)

module.exports = router;
