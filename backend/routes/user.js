const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const password = require('../middleware/password');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/signup',password,multer, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', multer, userCtrl.getAllUser);
router.get('/:id' ,multer, userCtrl.getOneUser);
router.put('/:id',auth.checkToken, multer, userCtrl.modifyUser );
router.delete('/:id', auth.checkToken, multer, userCtrl.deleteUser);
module.exports = router