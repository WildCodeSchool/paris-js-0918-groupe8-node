const express = require('express');

const Router = express.Router();
const connection = require('../config/db');

Router.get('/', (req, res) => {
  res.send('Tu es à la racine de /commentaires/')
});

Router.get('/showComments', (req, res) => {
  res.send('Tu es en bonne voie !')
  const sql = 'SELECT * FROM conteurDigitalDB';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

module.exports = Router;
