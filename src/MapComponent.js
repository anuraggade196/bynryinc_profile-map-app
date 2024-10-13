import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  const mapStyles = { height: '300px', width: '100%' };
  const defaultCenter = { lat: location.lat, lng: location.lng };

  return (
    <LoadScript googleMapsApiKey=AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe;
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
