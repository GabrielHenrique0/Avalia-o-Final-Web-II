const express = require('express');
const router = express.Router();
const BancobanControllers = require('../controllers/BancoBANControllers.js');

router.get('/bancoban', BancobanControllers.index);
router.post('/bancoban', BancobanControllers.store);
router.put('/bancoban/:codigo', BancobanControllers.update);
router.delete('/bancoban/:codigo', BancobanControllers.delete);

module.exports = router;