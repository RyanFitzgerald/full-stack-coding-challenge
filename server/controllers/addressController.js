const mongoose = require('mongoose');

const Address = mongoose.model('Address');

exports.getAddresses = async (req, res) => {
  // Set a filter
  const filter = {};

  // Check if a query is provided
  if (req.query.q) {
    filter.formattedAddress = { $regex: new RegExp(req.query.q), $options: 'i' };
  }

  // Get Addresses
  const addresses = await Address.find(filter);

  res.send(addresses);
};