const express = require('express');
const connection = require('../config/db');

const Router = express.Router();

// récupère les informations de TOUS les admins, SAUF le password
Router.get('/', (req, res) => {
  // connection à la base de données, et création d'un fichier JSON
  // pas de SELECT *, car le password ne doit jamais être récupéré
  const consultAdmin = 'SELECT id_user, firstname, lastname, mail, linkedin, twitter, create_date, update_date, avatar, user_right, bio_title, bio_content_short, bio_content, bio_picture FROM admin';
  connection.query(consultAdmin, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  });
});

// récupère les informations d'UN SEUL admin, SAUF le password
Router.get('/:id', (req, res) => {
  const getOneAdmin = 'SELECT id_user, firstname, lastname, mail, linkedin, twitter, create_date, update_date, avatar, user_right, bio_title, bio_content_short, bio_content, bio_picture FROM admin WHERE id_user = ?';
  connection.query(getOneAdmin, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupèration d\'un admin');
    } else {
      res.status(200).send(result);
    }
  });
});

// créé un nouveau admin
Router.post('/', (req, res) => {
  // récupération des données envoyées
  const nouveauAdmin = 'INSERT INTO admin (firstname, lastname, mail, linkedin, twitter, password, avatar, user_right, bio_title, bio_content_short, bio_content, bio_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.mail,
    req.body.linkedin,
    req.body.twitter,
    req.body.password,
    req.body.avatar,
    req.body.user_right,
    req.body.bio_title,
    req.body.bio_content_short,
    req.body.bio_content,
    req.body.bio_picture,
  ];
  connection.query(nouveauAdmin, values, (err) => {
    if (err) throw err;
    res.status(200).send('Nouvel utilisateur créé');
  });
});

// modification d'UN ou plusieurs champs d'UN admin (SANS MODIFIER LES AUTRES !)
Router.put('/:id', (req, res) => {
  // quand '/:id' > params
  const idAdmin = req.params.id;
  // SET ? = n'importe quel champs
  const modifAdmin = 'UPDATE admin SET ? WHERE id_user = ?';
  // [req.body] afin de garder le contenus des champs déjà renseignés
  connection.query(modifAdmin, [req.body, idAdmin], (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la modification de l\'utilisateur');
    } else {
      res.status(200).send('La modification a été effectuée.');
    }
  });
});

// efface UN admin
Router.delete('/:id', (req, res) => {
  // récupération des données envoyées (params=id dans url)
  const idAdmin = req.params.id;
  const deleteAdmin = 'DELETE FROM admin WHERE id_user = ?';

  // connection à la base de données, et insertion de l'employé
  connection.query(deleteAdmin, [idAdmin], (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    } else {
      res.status(200).send('Suppression effectuée');
    }
  });
});


module.exports = Router;
