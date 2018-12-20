const express = require('express');
// const connection = require('../config/db');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('Ceci est la route qui nous mène à /login');
});

// Router.post('/', (req, res) => {
//   const sql = 'INSERT INTO admin (id_user, mail, password) VALUES (null ,? ,? )';
//   const values = [
//     req.body.mail,
//     req.body.password,
//   ];
//   connection.query(sql, values, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

// Ecrire les autres routes ici :)


module.exports = Router;
