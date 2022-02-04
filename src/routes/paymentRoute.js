const express = require('express');
const router = express.Router();
const controller = require('../controllers/payController');

router.get('/paymethods', controller.get);
router.post('/paymethods', controller.create);
router.delete('/paymethods/:id', controller.delete);
router.put('/paymethods/:id', controller.update);




module.exports = router;