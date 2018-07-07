const mongoose = require('mongoose');
const Address = mongoose.model('Address');
const fs = require('fs');
const csv = require('fast-csv');
const multer = require('multer');
const request = require('request');
const { prepareGeocodeData } = require('../handlers/geocodeHandlers');

// Get all addresses and filter based on provided query
exports.getAddresses = async (req, res) => {
  // Set a filter
  let filter = {};

  // Check if a query is provided and update filter
  if (req.query.q) {
    // Formatted address contains short state (i.e. GA), so also check state field
    filter = {
      $or: [
        { 'formattedAddress': { $regex: new RegExp(req.query.q), $options: 'i' } },
        { 'state' : { $regex: new RegExp(req.query.q), $options: 'i' } }
      ]
    };
  }

  // Get Addresses
  const addresses = await Address.find(filter);

  // Send result
  res.send(addresses);
};

// Store the csv in temp storage
exports.uploadCSV = multer({dest: 'tmp/csv/'}).single('file');

// Add new addresses from provided CSV file
exports.addAddresses = async (req, res) => {
  var addressRows = [];

  // open uploaded file
  csv.fromPath(req.file.path)
    .on('data', function (data) {
      if (data !== 'Address') {
        addressRows.push(data);
      }
    })
    .on('end', function () {
      // Delete the temp file
      fs.unlinkSync(req.file.path);

      // Process the file rows
      addressRows.forEach((address) => {
        request(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API_KEY}`,
          { json: true }, 
          async (err, res, body) => {
            // If there is an error, log it
            if (err) { 
              return console.log(err); 
            }

            // Otherwise, if OK and type is Rooftype, insert the data
            if (body.status === 'OK' && body.results[0].geometry.location_type === 'ROOFTOP') {
              try {
                const preparedData = await prepareGeocodeData(body.results[0]);
                await (new Address(preparedData)).save();
                console.log('Address loaded');
              } catch(err) {
                console.log(err);
                process.exit();
              }
            }
          }
        );
      });

      // TO DO, make it async

      res.send('Added');
    });
};