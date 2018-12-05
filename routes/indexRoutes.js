const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const connection = require('../config/db.js');

// appel des différentes routes
const login = require('./login.js');
const admin = require('./admin.js');
const articles = require('./articles.js');
const bios = require('./bios.js');
const commentaires = require('./commentaires.js');
const medias = require('./medias.js');

const Router = express.Router();

const app = express();

app.use('/admin', admin);
app.use('/login', login);
app.use('/articles', articles);
app.use('/bios', bios);
app.use('/commentaires', commentaires);
app.use('/medias', medias);

module.exports = Router;
