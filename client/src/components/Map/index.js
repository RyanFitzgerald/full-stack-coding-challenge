import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

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

export default Map;