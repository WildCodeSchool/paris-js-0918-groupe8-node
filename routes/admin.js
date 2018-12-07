const express = require('express');
const connection = require('../config/db');

const Router = express.Router();

// récupère les informations de TOUS les admins, SAUF le password
Router.get('/', (req, res) => {
  // connection à la base de données, et création d'un fichier JSON
  // pas de SELECT *, car le password ne doit jamais être récupéré
  const modifAdmin = 'SELECT id_user, firstname, lastname, mail, create_date, update_date, avatar, user_right, bio_title, bio_content, bio_picture FROM admin';
  connection.query(modifAdmin, (err, result) => {
    // Si une erreur est survenue
    // alors on informe l'utilisateur de l'erreur
    if (err) throw err;
    // Si tout s'est bien passé, on envoie le résultat de la requête SQL
    // en tant que JSON.
    return res.status(200).send(result);
  });
});

// récupère les informations d'UN SEUL admin, SAUF le password
Router.get('/:id', (req, res) => {
  const getOneAdmin = 'SELECT id_user, firstname, lastname, mail, create_date, update_date, avatar, user_right, bio_title, bio_content, bio_picture FROM admin WHERE id_user = ?'
  connection.query(getOneAdmin, [req.params.id], (err, result) => {
    // Si une erreur est survenue
    // alors on informe l'utilisateur de l'erreur
    if (err) throw err;
    // Si tout s'est bien passé, on envoie le résultat de la requête SQL
    // en tant que JSON.
    return res.status(200).send(result);
  });
})

// créé un nouveau admin
Router.post('/', (req, res) => {
  // récupération des données envoyées
  const nouveauAdmin = 'INSERT INTO admin SET ?';

  console.log(req.body);

  // connexion à la base de données, et insertion d'un nouvel admin
  connection.query(nouveauAdmin, req.body, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la sauvegarde du nouvel admin');
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok" et
      res.status(200).send('Nouvel utilisateur créé');
    }
  });
});

// Router.put('/:id', (req, res) => {
//   // connection à la base de données, et modification d'un fichier JSON
//   // pas de SELECT *, car le password ne doit jamais être récupéré
//   const idAdmin = req.params.id;
//   const modifAdmin = '';
//   const firstNameAdmin = 'firstname'
//   connection.query(modifAdmin, [idAdmin] (err) => {
//     // Si une erreur est survenue
//     // alors on informe l'utilisateur de l'erreur
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification de l'utilisateur");
//     } else {
//     // Si tout s'est bien passé, on envoie le résultat de la requête SQL
//     // en tant que JSON.
//     return res.status(200).send(result);
//   });
// });

// efface UN admin
Router.delete('/:id', (req, res) => {
  // récupération des données envoyées (params=id dans url)
  const idAdmin = req.params.id;
  const deleteAdmin = 'DELETE FROM admin WHERE id_user = ?';

  // connection à la base de données, et insertion de l'employé
  connection.query(deleteAdmin, [idAdmin], (err) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send("Erreur lors de la suppression de l'utilisateur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.status(200).send('Suppression effectuée');
    }
  });
});


module.exports = Router;
