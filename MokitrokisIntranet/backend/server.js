// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const reservaRoutes = require('./routes/reservaRoutes'); // Importar las rutas de reservas
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', itemRoutes);
app.use('/api', reservaRoutes); // Usar las rutas de reservas

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
