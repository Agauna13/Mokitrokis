const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dataRoute = require('./routes/data');
const insertarRoute = require('./routes/insertar');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Usar las rutas
app.use('/api', dataRoute);
app.use('/api', insertarRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
