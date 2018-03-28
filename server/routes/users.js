const express = require('express');
const router = express.Router();
const { getAll, create, edit, del, login } = require('../controllers/users')

router.get('/', getAll)
router.post('/', create)
router.put('/:_id', edit)
router.delete('/:_id', del)
router.post('/login', login)

module.exports = router;
