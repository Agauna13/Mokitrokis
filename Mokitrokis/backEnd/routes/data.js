const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener los datos
router.get('/data', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
