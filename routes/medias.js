const express = require("express");
const connection = require("../config/db")
const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Ceci est la route qui nous mène à /medias")
});

//Ecrire les autres routes ici :)




module.exports = Router;