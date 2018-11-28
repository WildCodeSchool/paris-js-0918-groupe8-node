const express = require('express');
const morgan = require('morgan'); // Support HTTP request logger middleware
const bodyParser = require('body-parser'); // Body parsing middleware
const cors = require('cors'); // Providing a Connect/Express middleware
const Joi = require('joi'); // Object schema validation

const app = express();

app.use(morgan('dev'));

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
