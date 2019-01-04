const express = require('express');

const connection = require('../config/db');

const Router = express.Router();

// Attention : changer le port selon la config :
// http://localhost:3000/api/articles/

// localhost:3000/api/articles/
// GET tous les articles :
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM article';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/1
// GET tous UN seul article par ID :
// avec regex, limitant la saisie à des chiffres
Router.get('/:id(\\d+)', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('SELECT * FROM article WHERE id_article = ?');
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/accroche
// GET accueil : accroche :
Router.get('/accroche', (req, res) => {
  const sql = 'SELECT title, content, main_picture FROM article WHERE id_article = 1';
  connection.query(sql, (err, result) => {
    console.log(result);
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/globale/1
// GET de l'article avec admin
Router.get('/globale/:id', (req, res) => {
  const sql = 'SELECT a.id_article, a.create_date, a.title, a.content, aa.admin_id_user, aa.article_id_article, ad.id_user, ad.firstname, ad.lastname, ad.create_date, ad.avatar FROM article as a JOIN admin_has_article AS aa ON a.id_article = aa.article_id_article JOIN admin AS ad ON aa.admin_id_user = ad.id_user WHERE a.id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// // GET id_article SI admin lié
// // même fonction que la route globale, mais formulé différemment
// Router.get('/:id/admin', (req, res) => {
//   const sql = 'SELECT * FROM admin_has_article aa, admin ad WHERE aa.article_id_article = ? and aa.admin_id_user = ad.id_user';
//   const idArticle = req.params.id;
//   connection.query(sql, idArticle, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });


// // GET id_article SI medias lié
// // elle fonctionne, mais, pour l'instant nous n'allons pas utiliser la table medias
// Router.get('/:id/medias', (req, res) => {
//   const sql = 'SELECT * FROM article_has_media am, media m WHERE am.article_id_article = ? and m.id_media = am.media_id_media';
//   const idArticle = req.params.id;
//   connection.query(sql, idArticle, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

// localhost:3000/api/articles/1/commentaires
// GET id_article SI commentaire lié
Router.get('/:id/commentaires', (req, res) => {
  const sql = 'SELECT * FROM `comment` WHERE article_id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/
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

// localhost:3000/api/articles/1
// PUT modification d'un contenu d'un article
// avec regex, limitant la saisie à des chiffres
Router.put('/:id(\\d+)', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = ?');
  const formData = req.body;
  const idArticle = req.params.id;
  connection.query(sql, [formData, idArticle], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/accroche
// PUT modification accueil, accroche
Router.put('/accroche', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 1');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3000/api/articles/3
// DELETE effacer un article selon d'id:
Router.delete('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('DELETE FROM article WHERE id_Article = ?');

  connection.query(sql, idArticle, (err) => {
    if (err) throw err;
    return res.status(200).end();
  });
});

module.exports = Router;
