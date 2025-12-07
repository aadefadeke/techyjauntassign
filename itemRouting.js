const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.post('/', controller.createItem);         // Create : A POST REQUEST
router.get('/', controller.getItems);            // Read all
router.get('/:id', controller.getItemById);      // Read single
router.put('/:id', controller.updateItem);       // Update (replace-ish)
router.patch('/:id', controller.updateItem);     // Partial update : Halfway
router.delete('/:id', controller.deleteItem);    // Delete

module.exports = router;
