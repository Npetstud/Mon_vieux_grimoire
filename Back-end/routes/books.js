const express = require('express');
const router = express.Router();

const booksCtrl = require('../controllers/books');

router.post('/', booksCtrl.createThing);
router.put('/:id', booksCtrl.modifyThing);
router.delete('/:id', booksCtrl.deleteThing);
router.get('/', booksCtrl.getAllThing);
router.get('/:id', booksCtrl.getOneThing);

module.exports = router;