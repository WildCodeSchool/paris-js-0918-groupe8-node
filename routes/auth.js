const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('Ceci est la route qui nous mène à /admin');
});

module.exports = Router;
