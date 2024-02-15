const express = require('express');
const router = express.Router();
const multer = require ('../middleware/multer-config');
//Si on place multer avant le middleware d'authentification, même les images des requêtes non authentifiées seront enregistrées dans le serveur
const auth = require('../middleware/auth');



const booksCtrl = require('../controllers/books');


router.post('/', auth, multer, booksCtrl.createBook);
router.put('/:id',auth, multer, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.get('/',booksCtrl.getAllBooks);
router.get('/:id', auth, booksCtrl.getOneBook);

module.exports = router;