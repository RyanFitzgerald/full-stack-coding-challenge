require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');
const csv = require('fast-csv');
const request = require('request');
const mongoose = require('mongoose');
const { prepareGeocodeData } = require('../handlers/geocodeHandlers');

// Connect to DB and use ES6 promises
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Create stream
const stream = fs.createReadStream('./data/simple.csv');
let parser;

// Import models
const Address = require('../models/Address');

// Delete all address data
async function deleteData() {
  console.log('--- Deleting Data ---');
  await Address.remove();
  console.log('--- Data Deleted! ---');
  process.exit();
}

// Load data from the provided stream
function loadData() {
  console.log('--- Loading Data ---');

  // Start parsing from the stream
  parser = csv.fromStream(stream, {headers : true})
    // When data is retrieved
    .on("data", function(data) {
      // Pause the parser
      parser.pause();

      // Make the api call
      request(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.Address}&key=${process.env.GEOCODING_API_KEY}`,
        { json: true }, 
        (err, res, body) => {
          // If there is an error, log it
          if (err) { 
            return console.log(err); 
          }

          // Otherwise, if OK and type is Rooftype, insert the data
          if (body.status === 'OK' && body.results[0].geometry.location_type === 'ROOFTOP') {
            insertData(body.results[0]);
          } else {
            // Resume parsing
            parser.resume();
          }
        }
      );
    })
    // Once parsing is complete
    .on('end', function() {
      console.log('--- Data Loaded ---');
      process.exit();
    });
}

async function insertData(data) {
  try {
    const preparedData = await prepareGeocodeData(data);
    await (new Address(preparedData)).save();
    console.log('Address loaded');
    parser.resume();
  } catch(err) {
    console.log(err);
    process.exit();
  }
}

// Handle commands
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}