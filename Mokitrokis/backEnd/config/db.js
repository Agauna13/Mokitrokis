const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3312,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

module.exports = db;
