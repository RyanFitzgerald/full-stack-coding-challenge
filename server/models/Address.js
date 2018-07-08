const mongoose = require('mongoose');

// Use ES6 promises
mongoose.Promise = global.Promise;

// Create the schema
const addressSchema = new mongoose.Schema({
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  formattedAddress: {
    type: String,
    required: 'A formatted address must be provided',
    unique: true,
    index: true // Index it for better performance
  },
  streetNumber: {
    type: Number,
    required: 'A street number is required'
  },
  street: {
    type: String,
    required: 'A street is required'
  },
  city: {
    type: String,
    required: 'A city is required'
  },
  state: {
    type: String,
    required: 'A province or state is required',
    index: true // Index it for better performance
  },
  country: {
    type: String,
    required: 'A country is required'
  },
  postalCode: {
    type: String,
    required: 'A postal code is required'
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: 'Coordinates are required'
    },
  },
});

// Export the new schema
module.exports = mongoose.model('Address', addressSchema);