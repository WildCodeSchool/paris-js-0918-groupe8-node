const express = require('express');

const connection = require('../config/db');

const Router = express.Router();

// GET tous les articles :
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM article';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


Router.get('/:id/medias', (req, res) => {
  const sql = 'SELECT * FROM article a, article_has_media am WHERE a.id_article = ? and am.article_id_article = a.id_article';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// Affichage de l'auteur avec l'article
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/
Router.get('/:id/admin', (req, res) => {
  const sql = 'SELECT * FROM article a, admin_has_article am WHERE a.id_article = ? and am.article_id_article = a.id_article ';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// Affichage des commentaires avec l'article
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/id/commentaires
Router.get('/:id/commentaires', (req, res) => {
  const sql = 'SELECT * FROM `comment` WHERE article_id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// POST 1 nouveau article :
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/
Router.post('/', (req, res) => {
  const sql = 'INSERT INTO article (id_article, create_date, update_date, title, content, blog_status, front_page_favorite) VALUES (null ,now() ,now() ,? ,? ,? ,? )';
  const values = [
    req.body.title,
    req.body.content,
    req.body.blog_status,
    req.body.front_page_favorite,
  ];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// PUT modification d'un contenu d'un article :
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/:id
Router.put('/:id', (req, res) => {
  const sql = ('UPDATE article SET update_date = now(), ? WHERE id_article = ?');
  const formData = req.body;
  const idArticle = req.params.id;
  connection.query(sql, [formData, idArticle], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// Delete effacer un article selon d'id:
// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/id
Router.delete('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('DELETE FROM article WHERE id_Article = ?');

  connection.query(sql, idArticle, (err) => {
    if (err) throw err;
    return res.status(200);
  });
});

module.exports = Router;
