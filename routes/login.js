const express = require('express');
// const connection = require('../config/db');
const jwt = require('jsonwebtoken');

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

Router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.email === 'a@a' && req.body.password === 'a') {
    const tokenInfo = {
      name: 'admin',
      role: 'admin',
    };
    const token = jwt.sign(tokenInfo, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(token);
    res.header('Access-Control-Expose-Headers', 'x-access-token');
    res.set('x-access-token', token);
    res.status(200).send({ flash: 'Vous êtes connecté' });
  } else {
    res.status(500).send({ flash: 'Email ou mot de passe incorrect !' });
  }
});

// récupération du Bearer token envoyé par le front
const getToken = (req) => {
  if (
    req.headers.authorization
    && req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};
// vérification routes protégées par token
Router.post('/protected', (req, res) => {
  const token = getToken(req);
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ flash: 'Accès non autorisé !' });
    }
    return res.status(200).send({ flash: 'Accès autorisé' });
  });
});

// Ecrire les autres routes ici :)


module.exports = Router;
