const express = require('express');

const Router = express.Router();
const connection = require('../config/db');


// GET tous les commentaires (changer le port selon la config) :
// Dans le navigateur
// http://localhost:3001/api/commentaires/
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM comment';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// POST 1 nouveau commentaire (changer le port selon la config) :
// Dans Postman
// http://localhost:3001/api/commentaires/
// Router.post('/', (req, res) => {
//   // const formData = req.body;
//   // console.log(formData);
//   const sql = 'INSERT INTO comment SET (create_date, update_date, content, pseudo_anominous, mail, article_id_article) VALUES (?, ?, ?, ?, ?, ?)';
//   const values = [
//     req.body.create_date,
//     req.body.update_date,
//     req.body.content,
//     req.body.pseudo_anominous,
//     req.body.mail,
//     req.body.article_id_article,
//   ];
//   connection.query(sql, values, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

module.exports = Router;
