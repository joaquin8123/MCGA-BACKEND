const express = require('express');
const supplierController = require('../controllers/supplier');

const router = express.Router();

router.post('/', supplierController.create);
router.get('/',supplierController.getAll);
router.get('/:id',supplierController.getById);
router.put('/:id',supplierController.edit);
router.delete('/:id',supplierController.deleteSupplier);
router.put('/activate/:id',supplierController.activeSupplier);

module.exports = router;