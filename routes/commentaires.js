const express = require('express');

const Router = express.Router();
const connection = require('../config/db');


// GET tous les commentaires :
// Attention : changer le port selon la config :
// http://localhost:3001/api/commentaires/
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM comment';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// POST 1 nouveau commentaire :
// Attention : changer le port selon la config :
// http://localhost:3001/api/commentaires/
Router.post('/', (req, res) => {
  const sql = 'INSERT INTO comment (id_comment, create_date, update_date, content, pseudo_anominous, mail, article_id_article) VALUES (null, now(), now(), ?, ?, ?, ?)';
  const values = [
    req.body.content,
    req.body.pseudo_anominous,
    req.body.mail,
    req.body.article_id_article,
  ];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// GET -> Afficher le comment numéro :id 
// Attention : changer le port selon la config :
// http://localhost:3001/api/commentaires/:id
Router.get('/:id', (req, res) => {
  const idComment = req.params.id;
  const sql = ('SELECT * FROM comment WHERE id_comment = ?');

  connection.query(sql, idComment, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// PUT -> Modifier le comment numéro :id
// Attention : changer le port selon la config :
// http://localhost:3001/api/commentaires/:id
Router.put('/:id', (req, res) => {
  const idComment = req.params.id;
  const sql = ('UPDATE comment SET update_date = now(), content = ? WHERE id_comment = ?');
  const values = [
    req.body.content,
    idComment,
  ];

  connection.query(sql, values, (err) => {
    if (err) throw err;
    return res.sendStatus(200);
  });
});

// DELETE -> Supprimer le comment numéro :id:
// Attention : changer le port selon la config :
// http://localhost:3001/api/commentaires/:id
Router.delete('/:id', (req, res) => {
  const idComment = req.params.id;
  const sql = ('DELETE FROM comment WHERE id_comment = ?');

  connection.query(sql, idComment, (err) => {
    if (err) throw err;
    return res.sendStatus(200);
  });
});

module.exports = Router;
