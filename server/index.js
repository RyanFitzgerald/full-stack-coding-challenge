// Import required packages
const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({
  path: 'variables.env'
});

// Connect to our Database and handle a bad connections
if (process.env.NODE_ENV === 'test') {
  mongoose.connect(process.env.DATABASE_TEST);
} else {
  mongoose.connect(process.env.DATABASE);
}

// Tell Mongoose to use ES6 promises
mongoose.Promise = global.Promise;

// Handle mongo connection errors
mongoose.connection.on('error', (err) => {
  console.error(`ERROR: ${err.message}`);
});

// Import all models
require('./models/Address');

// Require app with config
const app = require('./app');

// Set the port
app.set('port', process.env.PORT || 7777);

// List on the port
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});

module.exports = server;