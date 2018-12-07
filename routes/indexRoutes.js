const express = require('express');

// appel des différentes routes
const login = require('./login.js');
const admin = require('./admin.js');
const articles = require('./articles.js');
const commentaires = require('./commentaires.js');
const medias = require('./medias.js');

const Router = express.Router();

// const app = express();

Router.use('/admin', admin);
Router.use('/login', login);
Router.use('/articles', articles);
Router.use('/commentaires', commentaires);
Router.use('/medias', medias);


module.exports = Router;
