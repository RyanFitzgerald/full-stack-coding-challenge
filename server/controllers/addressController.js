const mongoose = require('mongoose');
const Address = mongoose.model('Address');
const fs = require('fs');
const csv = require('fast-csv');
const multer = require('multer');
const { geocodeAddress, prepareGeocodeData } = require('../handlers/geocodeHandlers');

// Define options for multer
const multerOptions = {
  dest: 'tmp/csv/',
  fileFilter(req, file, next) {
    const isCSV = file.mimetype === 'text/csv' || file.mimetype === 'application/vnd.ms-excel';

    if (isCSV) {
      next(null, true);
    } else {
      next({message: 'That filetype is not allowed!'}, false); 
    }
  }
};

// Get all addresses and filter based on provided query
exports.getAddresses = async (req, res) => {
  // Set empty filter
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

  // Get matching Addresses
  const addresses = await Address.find(filter);

  // Send result
  res.send(addresses);
};

// Store the csv in temp storage
exports.uploadCSV = multer(multerOptions).single('file');

// Add new addresses from provided CSV file
exports.addAddresses = async (req, res) => {
  // Store rows of the CSV
  const addressRows = [];

  // Create counter for number of approved addresses
  let numAddresses = 0;

  // Open the uploaded file
  csv.fromPath(req.file.path)
    // For each set of data (rows)
    .on('data', function (data) {
      if (data !== 'Address') {
        // Push it to the rows array
        addressRows.push(data);
      }
    })
    // Once complete, do the processing
    .on('end', async function () {
      // Delete the temp file
      fs.unlinkSync(req.file.path);

      // Process the file rows ysing async / await
      for (let address in addressRows) {
        try {
          // Geocode the provided address
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

      // Return number of addresses added
      res.send({ numAddresses });
    });
};