const express = require('express');
const router = express.Router();
const borrarDb = require('../db/borrar'); // Aquí cargas la conexión específica para borrado

router.delete('/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const sql = 'DELETE FROM reservas WHERE id = ?';
    
    borrarDb.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Registro borrado correctamente', result });
        }
    });
});

module.exports = router;
