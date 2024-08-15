// backend/controllers/reservaController.js
const db = require('../config/db');

exports.getReservas = (req, res) => {
    const query = 'SELECT * FROM reservas';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};
