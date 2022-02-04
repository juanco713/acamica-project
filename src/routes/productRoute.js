const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')



router.get('/products', controller.get);
router.post('/products', controller.create);
router.delete('/products/:id', controller.delete);
router.put('/products/:id', controller.update);






module.exports = router;