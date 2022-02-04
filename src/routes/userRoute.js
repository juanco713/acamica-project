const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers/userController');

router.post('/signup', userController.create);





module.exports = router;