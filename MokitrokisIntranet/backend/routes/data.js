const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // Aquí cargas la conexión general o un archivo específico de conexión

router.get('/data', (req, res) => {
    db.query('SELECT * FROM tabla', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
