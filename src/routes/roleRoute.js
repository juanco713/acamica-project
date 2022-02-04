const { Router } = require('express');
const router = Router();
const { controllerRole } = require('../controllers/roleController');

router.get('/roles', controllerRole.get);
router.post('/role', controllerRole.create);




module.exports = router;

