const express = require('express');
const connection = require('../config/db');
const checkAuth = require('../controllers/check-auth');

const Router = express.Router();

// Affichage des médias du front back office
Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM media';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// Affiche de la route médias lié à crédit
Router.get('/:id/credit', (req, res) => {
  const sql = 'SELECT * FROM media m, media_has_credit mc WHERE m.id_media = ? and mc.media_id_media = m.id_media ';
  const idMedia = req.params.id;
  connection.query(sql, idMedia, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});


// Création d'un nouveau média
Router.post('/', checkAuth, (req, res) => {
  const sql = 'INSERT INTO media SET ?';
  connection.query(sql, req.body, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// Création d'un nouveau credit
Router.post('/credit', checkAuth, (req, res) => {
  const sql = 'INSERT INTO credit SET ?';
  connection.query(sql, req.body, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// Création d'un nouveau media has credit
Router.post('/mediacredit', checkAuth, (req, res) => {
  const sql = 'INSERT INTO media_has_credit SET ?';
  connection.query(sql, req.body, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});
// Modification d'un média
Router.put('/:id', checkAuth, (req, res) => {
  const sql = ('UPDATE media, media_has_credit, credit SET ? WHERE id_media = ?');
  const formData = req.body;
  const idMedia = req.params.id;
  connection.query(sql, [formData, idMedia], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// Suppression d'un média
Router.delete('/:id', checkAuth, (req, res) => {
  const idMedia = req.params.id;
  const sql = ('DELETE FROM media WHERE id_Media = ?');

  connection.query(sql, idMedia, (err) => {
    if (err) throw err;
    return res.status(200);
  });
});

module.exports = Router;
