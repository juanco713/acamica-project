const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
const validation = require('../middlewares/authToken')



router.get('/products', validation.authUser, controller.get);
router.post('/products', controller.create);
router.delete('/products/:id', controller.delete);
router.put('/products/:id', controller.update);






module.exports = router;