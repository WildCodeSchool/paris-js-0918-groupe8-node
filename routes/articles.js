const express = require('express');

const connection = require('../config/db');

const Router = express.Router();

Router.post('/', (req, res) => {
  res.send('Ceci est la route qui nous mène à /articles');
});


// Router.get('/showArticles', (req, res) => {
//   const sql = 'SELECT * FROM conteurDigitalDB';
//   connection.query(sql, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

Router.post('/addArticles', (req, res) => {
  console.log('req BODY', req.body);
  const sql = 'INSERT INTO conteurDigitalDB (id_article, create_date, update_date, title, content, blog_status, front_page_favorite ) VALUES (?,?,?,?,?,?,?)';
  const values = [
    req.body.id_article,
    req.body.create_date,
    req.body.update_date,
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

// Router.put('/articles:id', (req, res) => {
//   const idArticle = req.params.id;
//   const formData = req.body;
//   connection.query('UPDATE articles SET ? WHERE id = ?', [formData, idArticle], (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Erreur lors de la modification');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });


module.exports = Router;
