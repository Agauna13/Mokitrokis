const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener datos de la base de datos
router.get('./data', (req, res) => {
    db.query('SELECT * FROM reservas', (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

module.exports = router;