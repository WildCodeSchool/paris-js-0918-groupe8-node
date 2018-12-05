const express = require('express');
const morgan = require('morgan'); // Support HTTP request logger middleware
const bodyParser = require('body-parser'); // Body parsing middleware
const cors = require('cors'); // Providing a Connect/Express middleware
// const Joi = require('joi'); // Object schema validation
// const multer = require('multer'); // Middleware for handling `multipart/form-data'
// const mysql = require('mysql2');
// const connection = require('./config/db.js');
const indexRoutes = require('./routes/indexRoutes.js');


const app = express();
// const upload = multer({ dest: 'tmp/' });

app.use(morgan('dev'));

app.use(cors());

//  permet d'utiliser "req.body" dans "./routes/xxx.js"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', indexRoutes);

app.get('/api', (req, res) => {
  res.send('happy');
});

// Ecoute du serveur sur le port définit dans le fichier ".env"
// ou sur le port 3000 par défaut.
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${server.address().port}`);
});
