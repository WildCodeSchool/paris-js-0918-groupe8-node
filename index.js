const express = require('express');
const morgan = require('morgan'); // Support HTTP request logger middleware
const bodyParser = require('body-parser'); // Body parsing middleware
const cors = require('cors'); // Providing a Connect/Express middleware
const Joi = require('joi'); // Object schema validation
const multer = require('multer'); // Middleware for handling `multipart/form-data'
const connection = require("./config/db.js")
const routes = require('./routes/routes.js');
const mysql = require('mysql2');

//appel des différentes routes
const admin = require('./routes/admin.js');
const login = require('./routes/login.js');
const articles = require('./routes/articles.js');
const bios = require('./routes/bios.js');
const commentaires = require('./routes/commentaires.js');
const medias = require('./routes/medias.js');

const app = express();
const upload = multer({ dest: 'tmp/' });

app.use(morgan('dev'));

app.use(cors());

//permet d'utiliser "req.body" dans "./routes/xxx.js"
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json());


app.use("/login", admin);
app.use("/admin", admin);
app.use("/articles", articles);
app.use("/bios", bios);
app.use("/commentaires", commentaires);
app.use("/medias", medias);

app.get("/", (req, res) => {
    res.send("I am here '/' on the index page !?")
});

//Ecoute du serveur sur le port définit dans le fichier .env 
//ou sur le port 3000 par défaut.
let server = app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${server.address().port}`)
});
