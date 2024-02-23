const express = require('express');
const router = express.Router();
//Si on place multer avant le middleware d'authentification, même les images des requêtes non authentifiées seront enregistrées dans le serveur
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer-config');
const booksCtrl = require('../controllers/books');
const sharp = require ('../middleware/sharp');



router.post('/', auth, sharp, multer, booksCtrl.createBook);
router.post('/:id/rating', auth, booksCtrl.addBookRating);
router.put('/:id', auth, multer, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.get('/bestrating', booksCtrl.getTopRatedBooks);
router.get('/', booksCtrl.getAllBooks);
router.get('/:id', booksCtrl.getOneBook);




module.exports = router;