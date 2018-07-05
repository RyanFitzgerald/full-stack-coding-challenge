const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const addressSchema = new mongoose.Schema({
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  formattedAddress: {
    type: String,
    required: 'A formatted address must be provided',
    index: true // Index it for better performance
  },
  streetNumber: {
    type: Number,
    required: 'A street number is required'
  },
  route: {
    type: String,
    required: 'A route is required'
  },
  locality: {
    type: String,
    required: 'A locality is required'
  },
  provinceState: {
    type: String,
    required: 'A province or state is required'
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
      default: [-75.69719309999999, 45.4215296]
    },
  },
});

module.exports = mongoose.model('Address', addressSchema);