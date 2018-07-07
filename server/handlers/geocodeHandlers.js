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