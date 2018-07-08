const axios = require('axios');

// Geocode the address by hitting the Geocode API and return false if a bad address
exports.geocodeAddress = (address) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API_KEY}`).then((response) => {
    if (response.data.status === 'OK' && response.data.results[0].geometry.location_type === 'ROOFTOP') {
      return response.data.results[0];
    }

    return false;
  });
};

// Take the raw API data and format it as needed
exports.prepareGeocodeData = (data) => {
  // Result object
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

  // Send back formatted result
  return result;
};