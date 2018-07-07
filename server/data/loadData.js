require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');
const csv = require('fast-csv');
const request = require('request');

const stream = fs.createReadStream('./data/simple.csv');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

// Import models
const Address = require('../models/Address');

async function deleteData() {
  console.log('--- Deleting Data ---');
  await Address.remove();
  console.log('--- Data Deleted! ---');
  process.exit();
}

function loadData() {
  console.log('--- Loading Data ---');
  const csvStream = csv()
    .on('data', function(data) {
      // Skip the header row
      if (data !== 'Address') {
        request(`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=${process.env.GEOCODING_API_KEY}`,
          { json: true }, 
          (err, res, body) => {
            if (err) { return console.log(err); }
            if (body.status === 'OK' && body.results[0].geometry.location_type === 'ROOFTOP') {
              insertData(body.results[0])
            }
          }
        );
        
      }
    })
    .on('end', function() {
      console.log('--- Data Loaded! ---');
    });
 
  stream.pipe(csvStream);
}

function prepareData(data) {
  // Store result
  const result = {};

  // Get necessary portions of data
  const addressComponents = data['address_components'];
  const formattedAddress = data['formatted_address'];
  const location = data['geometry']['location'];

  // Add formatted address to result
  result.formattedAddress = formattedAddress;

  // Add coordinates
  result.location = {
    coordinates: [location.lng, location.lat]
  }

  // Get address components
  addressComponents.forEach(component => {
    // Check which data to get
    if (component.types.includes('street_number')) { // Street Number
      result.streetNumber = component.long_name;
    } else if (component.types.includes('route')) { // Street
      result.street = component.long_name;
    } else if (component.types.includes('locality')) { // City
      result.city = component.long_name;
    } else if (component.types.includes('administrative_area_level_1')) { // State
      result.state = component.long_name;
    } else if (component.types.includes('country')) { // Country
      result.country = component.long_name;
    } else if (component.types.includes('postal_code')) { // Postal Code
      result.postalCode = component.long_name;
    } 
  });

  console.log(result);

  // Send back formatted result
  return result;
}

async function insertData(data) {
  try {
    const preparedData = prepareData(data);
    await (new Address(preparedData)).save();
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