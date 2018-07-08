require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');
const csv = require('fast-csv');
const mongoose = require('mongoose');
const { prepareGeocodeData, geocodeAddress } = require('../handlers/geocodeHandlers');

// Connect to DB and use ES6 promises
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Create stream
const stream = fs.createReadStream('./data/simple.csv');

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
  const addressRows = [];
  let numAddresses = 0;

  // Start parsing from the stream
  parser = csv.fromStream(stream, {headers : true})
    // When data is retrieved
    .on('data', function(data) {
      // Push to rows array
      addressRows.push(data);
    })
    // Once parsing is complete, process the data
    .on('end', async function() {
      // Process the file rows
      for (let address in addressRows) {
        try {
          // Make the API call
          const addressData = await geocodeAddress(address);
          
          // If it's a good address, prepare the data and insert
          if (addressData) {
            const preparedData = await prepareGeocodeData(addressData);
            await (new Address(preparedData)).save();
            numAddresses++;
          }
        } catch (e) {
          console.error(e);
        }
      }

      // Print the result and exit
      console.log(`--- ${numAddresses} Addresses Loaded ---`);
      process.exit();
    });
}

// Handle commands
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}