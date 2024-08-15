const express = require('express');
const router = express.Router();
const updateDb = require('../db/update'); // Aquí cargas la conexión específica para actualización

router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, fecha, hora, personas, comentarios } = req.body;
    
    const sql = 'UPDATE reservas SET nombre = ?, telefono = ?, fecha = ?, hora = ?, personas = ?, comentarios = ? WHERE id = ?';
    
    updateDb.query(sql, [nombre, telefono, fecha, hora, personas, comentarios, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Datos actualizados correctamente', result });
        }
    });
});

module.exports = router;
