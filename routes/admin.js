const express = require("express");
const connection = require("../config/db.js")
const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Ceci est la route qui nous mène à /admin")
});

//Ecrire les autres routes ici :)




module.exports = Router;