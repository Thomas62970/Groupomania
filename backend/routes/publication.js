const express = require('express');
const multer = require('../middleware/multer-config');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');
const auth = require('../middleware/auth');
const commentaireCtrl = require('../controllers/commentaire');

router.post('/',auth.checkToken,multer, publicationCtrl.createPublication);
router.get('/', auth.checkToken , publicationCtrl.getAll);
router.get('/:id',auth.checkToken , publicationCtrl.getOne);
router.put('/:id', auth.checkToken, multer, publicationCtrl.modifyPublication);
router.delete('/:id', auth.checkToken, multer, publicationCtrl.deletePublication);
router.post('/:id/commentaire', auth.checkToken, commentaireCtrl.createCommentaire);
router.post('/:id/like' , auth.checkToken , publicationCtrl.likePublication);

module.exports = router