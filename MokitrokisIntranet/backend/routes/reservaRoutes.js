// backend/routes/reservaRoutes.js
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/reservas', reservaController.getReservas);

module.exports = router;
