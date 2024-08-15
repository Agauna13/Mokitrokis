const express = require('express');
const router = express.Router();
const insertarDb = require('../db/insertar'); // Aquí cargas la conexión específica para inserción

router.post('/insertar', (req, res) => {
    const { nombre, telefono, fecha, hora, personas, comentarios } = req.body;
    
    const sql = 'INSERT INTO reservas (nombre, telefono, fecha, hora, personas, comentarios) VALUES (?, ?, ?, ?, ?, ?)';
    
    insertarDb.query(sql, [nombre, telefono, fecha, hora, personas, comentarios], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Datos insertados correctamente', result });
        }
    });
});

module.exports = router;
