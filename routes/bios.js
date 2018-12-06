const express = require('express');
const connection = require('../config/db');

const Router = express.Router();

Router.get('/api/bios', (req, res) => {
  // connection à la base de données, et création d'un fichier JSON
  // contenant id, prénom, nom, données bios et date modif
  // on part du principe que, pour modifier la bio, il faut
  // avoir déjà créé le user
  const biosEnLigne = 'SELECT id_user, firstname, lastname, bio_title, bio_content, bio_picture, update_date FROM admin';
  connection.query(biosEnLigne, (err, result) => {
    if (err) {
    // Si une erreur est survenue
    // alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des bios');
    }
    // Si tout s'est bien passé, on envoie le résultat de la requête SQL
    // en tant que JSON.
    return res.status(200).res.json(result);
  });
});

// écoute de l'url "/api/bio" avec le verbe POST
Router.post('/api/bio', (req, res) => {
  // récupération des données envoyées
  const formData = req.body;

  // connexion à la base de données, et insertion de l'employé
  connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un film");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// écoute de l'url "/api/movie/1"
Router.put('/api/movies/:id', (req, res) => {
  // récupération des données envoyées (params=id dans url)
  const idMovie = req.params.id;
  const formData = req.body;

  // connection à la base de données, et insertion de l'employé
  connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idMovie], (err) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un movie");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// écoute de l'url "/api/employees"
Router.put('/api/movies/', (req, res) => {

// end

module.exports = Router;
