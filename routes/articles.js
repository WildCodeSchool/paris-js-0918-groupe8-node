const express = require('express');

const connection = require('../config/db');

const Router = express.Router();

// Attention : changer le port selon la config :
// http://localhost:3001/api/articles/

// // localhost:3001/api/articles/
// // GET tous les articles :
// Router.get('/', (req, res) => {
//   const sql = 'SELECT * FROM article';
//   connection.query(sql, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });

// // localhost:3001/api/articles/10
// // GET UN seul article par ID :
// // avec regex, limitant la saisie à des chiffres
// Router.get('/:id(\\d{2,})', (req, res) => {
//   const idArticle = req.params.id;
//   const sql = ('SELECT * FROM article WHERE id_article = ?');
//   connection.query(sql, idArticle, (err, result) => {
//     if (err) throw err;
//     return res.status(200).send(result);
//   });
// });


// localhost:3001/api/articles/blog/10
// GET de l'article du blog avec admin
Router.get('/blog/:id(\\d{2,})', (req, res) => {
  const sql = 'SELECT a.id_article, a.create_date, a.update_date, a.title, a.content, a.main_picture, a.blog_status, a.front_page_favorite, ad.firstname, ad.lastname, ad.create_date, ad.avatar FROM article as a JOIN admin_has_article AS aa ON a.id_article = aa.article_id_article JOIN admin AS ad ON aa.admin_id_user = ad.id_user WHERE a.id_article = ?';
  const idArticle = req.params.id;
  connection.query(sql, idArticle, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/blog
// GET de tous les articles avec admin, id_article > 9
Router.get('/blog', (req, res) => {
  const sql = 'SELECT a.id_article, a.create_date, a.update_date, a.title, a.content, a.main_picture, a.blog_status, a.front_page_favorite, ad.firstname, ad.lastname, ad.avatar FROM article as a JOIN admin_has_article AS aa ON a.id_article = aa.article_id_article JOIN admin AS ad ON aa.admin_id_user = ad.id_user WHERE a.id_article > 9 ORDER BY a.create_date desc';
  connection.query(sql, (err, result) => {
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


// localhost:3001/api/articles/accroche
// GET accueil : accroche :
Router.get('/accroche', (req, res) => {
  const sql = 'SELECT title, content FROM article WHERE id_article = 1';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// localhost:3001/api/articles/charte-short
// GET accueil : charte courte
Router.get('/charte-short', (req, res) => {
  const sql = 'SELECT title, short_content FROM article WHERE id_article = 2';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// localhost:3001/api/articles/charte-long
// GET page charte
Router.get('/charte-long', (req, res) => {
  const sql = 'SELECT title, content, main_picture FROM article WHERE id_article = 3';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// localhost:3001/api/articles/newsletter
// GET accueil : newsletter
Router.get('/newsletter', (req, res) => {
  const sql = 'SELECT title, short_content FROM article WHERE id_article = 4';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/services
// GET accueil : services
Router.get('/services', (req, res) => {
  const sql = 'SELECT title, short_content, main_picture FROM article WHERE id_article BETWEEN 5 AND 7';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


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


// localhost:3001/api/articles/
// champs à renseigner :
// title, content, main_picture, blog_status, front_page_favorite,
// >>>>>   + OBLIGATOIRE : admin_id_user !!   <<<<<<
// POST 1 nouvel article :
Router.post('/', (req, res) => {
  const sql = 'INSERT INTO article (title, content, main_picture, blog_status, front_page_favorite) VALUES (? ,? ,? ,?, ?)';
  const valuesArticle = [
    req.body.title,
    req.body.content,
    req.body.main_picture,
    req.body.blog_status,
    req.body.front_page_favorite,
  ];
  connection.query(sql, valuesArticle, (err) => {
    if (err) throw err;
    const sqlRelation = 'INSERT INTO admin_has_article (admin_id_user, article_id_article) VALUES (?, LAST_INSERT_ID())';
    const idAdmin = req.body.admin_id_user;
    connection.query(sqlRelation, idAdmin, (error, resultRelation) => {
      if (error) throw error;
      return res.send(resultRelation);
    });
    // return res.status(200).send(result);
  });
});


// attention : impossible de détailler, dans le PUT, les champs à modifier
// sinon, ceux pas modifiés sont écrasés

// localhost:3001/api/articles/blog/10
// champs à prévoir :
// title, content, main_picture, blog_status, front_page_favorite
// PUT modification d'un contenu d'un article du blog
// avec regex, limitant la saisie à des chiffres
Router.put('/blog/:id(\\d{2,})', (req, res) => {
  const updateArticle = ('UPDATE article SET ? WHERE id_article = ?');
  const formData = req.body;
  const idArticle = req.params.id;
  connection.query(updateArticle, [formData, idArticle], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/blog/favoris/10
// champs à prévoir :
// title, content, main_picture, blog_status, front_page_favorite
// PUT modification d'un contenu d'un article du blog
// avec regex, limitant la saisie à des chiffres
Router.put('/blog/favoris/:id(\\d{2,})', (req, res) => {
  const countFavorits = ('SELECT count(id_article) AS count FROM article WHERE front_page_favorite=1;');
  const stateArt = ('SELECT front_page_favorite FROM article WHERE id_article = ?');
  const updateArticle = ('UPDATE article SET ? WHERE id_article = ?');
  const formData = req.body;
  const idArticle = req.params.id;
  connection.query(stateArt, [idArticle], (err, resultState) => {
    if (resultState[0].front_page_favorite) {
      connection.query(updateArticle, [formData, idArticle], (errState, result) => {
        if (errState) throw errState;
        res.status(200).send(result);
      });
    } else {
      connection.query(countFavorits, (errCount, resultCount) => {
        if (resultCount[0].count > 2) {
          if (errCount) throw errCount;
          res.json({ flash: 'Vous avez déjà 3 articles en favoris :)' });
        } else {
          connection.query(updateArticle, [formData, idArticle], (errUpdate, result) => {
            if (errUpdate) throw errUpdate;
            res.status(200).send(result);
          });
        }
      });
    }
  });
});

// localhost:3001/api/articles/accroche
// >>> Il faut, dans le front, donner accès seulement au champs 'title' + 'content'
// PUT modification accueil, accroche
Router.put('/accroche', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 1');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/charte-short
// >>> Il faut, dans le front, donner accès seulement au champs 'title' + 'short_content'
// PUT modification accueil, charte courte
Router.put('/charte-short', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 2');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/charte-long
// >>> Il faut, dans le front, donner accès seulement au champs 'title' + 'content' + 'main_picture'
// PUT modification page charte
Router.put('/charte-long', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 3');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// localhost:3001/api/articles/newsletter
// >>> Il faut, dans le front, donner accès seulement aux champs
// >>> 'title' + 'short_content' + 'main_picture'
// PUT modification accueil newsletter
Router.put('/newsletter', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 4');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// >>> Il faut, dans le front, donner accès seulement aux champs
// >>> 'title' + 'short_content' + 'main_picture'
// PUT modification accueil 3 services, mais un à la fois

// localhost:3001/api/articles/service1
Router.put('/service1', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 5');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});
// localhost:3001/api/articles/service2
Router.put('/service2', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 6');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});
// localhost:3001/api/articles/service3
Router.put('/service3', (req, res) => {
  const sql = ('UPDATE article SET ? WHERE id_article = 7');
  const formData = req.body;
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// ******************************************
// >>> la route DELETE NE FONCTIONNE PLUS,
// >>> à cause de la table de liaison !!!

// // localhost:3001/api/articles/blog/21
// // DELETE effacer un article selon d'id:
// Router.delete('blog/:id', (req, res) => {
//   const sql = 'DELETE FROM article WHERE id_Article = ?';
//   const idArticle = req.params.id;
//   connection.query(sql, idArticle, (err) => {
//     if (err) throw err;
//     return res.status(200).end();
//   });
// });
// ********************************************

module.exports = Router;
