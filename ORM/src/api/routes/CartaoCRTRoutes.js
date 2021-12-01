const express = require('express');
const router = express.Router();
const cartaocrtControllers = require('../controllers/CartaoCRTControllers.js');

router.get('/cartaocrt', cartaocrtControllers.index);
router.post('/cartaocrt', cartaocrtControllers.store);
router.put('/cartaocrt/:codigo', cartaocrtControllers.update);
router.delete('/cartaocrt/:codigo', cartaocrtControllers.delete);

module.exports = router;