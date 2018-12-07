const express = require('express');

const connection = require('../config/db');

const Router = express.Router();


Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM article';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


Router.get('/:id/commentaires', (req, res) => {
  const sql = 'SELECT * FROM `comment` WHERE article_id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

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

Router.put('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('UPDATE article SET update_date = now(), title = ?, content = ?, blog_status = ?, front_page_favorite = ? WHERE id_article = ?');
  const values = [
    req.body.title,
    req.body.content,
    req.body.blog_status,
    req.body.front_page_favorite,
    idArticle,
  ];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


Router.delete('/:id', (req, res) => {
  const idArticle = req.params.id;
  const sql = ('DELETE FROM article WHERE id_Article = ?');

  connection.query(sql, idArticle, (err) => {
    if (err) throw err;
    return res.status(200);
  });
});

module.exports = Router;
