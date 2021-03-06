import React from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import { mapAPIKey } from '../../config';

// Import components
import Map from '../Map';
import Wrapper from './Wrapper';

// Render markers for provided addresses
function renderMarker(address, key, openInfoWindow, onMarkerClick) {
  return (
    <Marker 
      key={key}
      title={address.formattedAddress}
      position={{lat: address.location.coordinates[1], lng: address.location.coordinates[0]}} 
      onClick={() => onMarkerClick(key)}
    >
      {openInfoWindow === key && 
        <InfoWindow>
            <span>{address.formattedAddress}</span>
        </InfoWindow>
      }
    </Marker>
  );
}

// Define the component
function ResultMap({ openInfoWindow, onMarkerClick, data }) {
  return (
    <Wrapper>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapAPIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >
        {data.map((address, key) => renderMarker(address, key, openInfoWindow, onMarkerClick))}
      </Map>
    </Wrapper>
  );
}

// Define the props
ResultMap.propTypes = {
  openInfoWindow: PropTypes.number,
  onMarkerClick: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default ResultMap;