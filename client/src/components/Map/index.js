import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

// Define the component
const Map = withScriptjs(withGoogleMap(function({ children }) { 
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 40.1950, lng: -95.1402 }}
    >
      {children}
    </GoogleMap>
  );
}));

// Define prop types
Map.propTypes = {
  children: PropTypes.any.isRequired
}

export default Map;