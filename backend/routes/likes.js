const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const likeCtrl = require('../controllers/likes');

router.get('/', auth.checkToken, likeCtrl.allLikes);
router.delete('/:id', auth.checkToken, likeCtrl.deleteLikes);

module.exports = router