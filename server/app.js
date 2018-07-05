// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// import environmental variables from our variables.env file
require('dotenv').config({
  path: 'variables.env'
});

// create our Express app
const app = express();

// Use helmet for security
app.use(helmet());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// After all middleware, handle routes
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise, we hit a bigger error
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

// Production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
