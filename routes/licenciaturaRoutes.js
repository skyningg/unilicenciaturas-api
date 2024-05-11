const express = require('express');
const router = express.Router();
const licenciaturaController = require('../controllers/licenciaturaController');

router.post('/', licenciaturaController.createDegree);
router.get('/', licenciaturaController.getAllDegrees);

module.exports = router;
