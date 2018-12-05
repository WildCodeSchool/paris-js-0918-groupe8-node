const express = require('express');
// const connection = require('../config/db');
const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('Ceci est la route qui nous mène à /bios');
});

module.exports = Router;
