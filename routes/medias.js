const express = require('express');
const connection = require('../config/db');

const Router = express.Router();


Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM media';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

Router.post('/', (req, res) => {
  const sql = 'INSERT INTO media (id_media, title, description, path, type) VALUES (null,? ,? ,? ,? )';
  const values = [
    req.body.title,
    req.body.description,
    req.body.path,
    req.body.type,
  ];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


module.exports = Router;
