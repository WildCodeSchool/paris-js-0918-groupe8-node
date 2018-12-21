const express = require('express');

const connection = require('../config/db');

const Router = express.Router();

// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/

// GET tous les articles :
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM article';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// GET tous UN seul article par ID :
Router.get('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('SELECT * FROM article WHERE id_article = ?');
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// FONCTIONNE SEULEMENT SI TOUTES LES TABLES CONCERNEES SONT RENSEIGNEES
// >>ET<< EN RELATION ENTRE ELLES (article, media, crédit, admin, comment)

// GET Grande autoroute de l'article avec tout les links attribué admin,comment,media et credit
// Router.get('/:id', (req, res) => {
//   const sql = '
// SELECT *
// FROM article a, article_has_media am, media m, admin_has_article aa, admin ad,
// comment c, media_has_credit mc,credit cr WHERE c.article_id_article=a.id_article
// and ad.id_user=aa.admin_id_user
// and aa.article_id_article=a.id_article
// and m.id_media=am.media_id_media
// and m.id_media=mc.media_id_media
// and mc.media_id_media=cr.id_credit
// and a.id_article = ?
// and am.article_id_article = a.id_article';
//   const idArticle = req.params.id;
//   connection.query(sql, idArticle, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

// GET tous UN seul article par ID :      >>>> NE FONCTIONNE PAS <<<<<<<<<
// Router.get('/:id/global', (req, res) => {
//   const sql =
//  ('SELECT (id_article, create_date, title, content, blog_status, front_page_favorite)
//  FROM article WHERE id_article = ?
//  UNION ALL SELECT (id_media, title, description, path, type)
//  FROM article_has_media am, media m
//  WHERE am.article_id_article = ? and m.id_media = am.media_id_media ');
//   const idArticle = req.params.id;
//   connection.query(sql, [idArticle, idArticle, idArticle], (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

// GET id_article SI medias lié
Router.get('/:id/medias', (req, res) => {
  const sql = 'SELECT * FROM article_has_media am, media m WHERE am.article_id_article = ? and m.id_media = am.media_id_media';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// GET id_article SI admin lié
Router.get('/:id/admin', (req, res) => {
  const sql = 'SELECT * FROM admin_has_article aa, admin ad WHERE aa.article_id_article = ? and aa.admin_id_user = ad.id_user';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// GET id_article SI commentaire lié
Router.get('/:id/commentaires', (req, res) => {
  const sql = 'SELECT * FROM `comment` WHERE article_id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// POST 1 nouvel article :
Router.post('/', (req, res) => {
  const sql = 'INSERT INTO article (title, content, blog_status, front_page_favorite) VALUES (? ,? ,? ,? )';
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
Router.put('/:id', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = ?');
  const formData = req.body;
  const idArticle = req.params.id;
  connection.query(sql, [formData, idArticle], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// DELETE effacer un article selon d'id:
Router.delete('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('DELETE FROM article WHERE id_Article = ?');

  connection.query(sql, idArticle, (err) => {
    if (err) throw err;
    return res.status(200);
  });
});

module.exports = Router;
