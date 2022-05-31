const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentaireCtrl = require('../controllers/commentaire');

router.get('/', auth.checkToken, commentaireCtrl.getAll);
router.get('/:id', auth.checkToken, commentaireCtrl.getOne);
router.put('/:id', auth.checkToken, commentaireCtrl.modifyCommentaire);
router.delete('/:id', auth.checkToken, commentaireCtrl.deleteCommentaire);


module.exports = router