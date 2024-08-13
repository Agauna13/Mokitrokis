const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


//import de las rutas para el CRUD
const dataRoute = require('./routes/data');
const insertarRoute = require('./routes/insertar');
const borrarRoute = require('./routes/borrar');
const updateRoute = require('./routes/update');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Usamos las rutas
app.use('/api', dataRoute);
app.use('/api', insertarRoute);
app.use('/api', borrarRoute);
app.use('/api', updateRoute);


//conexión al puerto
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});