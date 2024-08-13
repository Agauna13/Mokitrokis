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

// Ruta para insertar datos en la base de datos
router.post('./insertar', (req, res) => {
    const { nombre, telefono, fecha, hora, personas, comentarios } = req.body;
    
    const sql = 'INSERT INTO reservas (nombre, telefono, fecha, hora, personas, comentarios) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(sql, [nombre, telefono, fecha, hora, personas, comentarios], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.status(200).json({ message: 'Datos insertados correctamente', result });
    });
});

module.exports = router;
