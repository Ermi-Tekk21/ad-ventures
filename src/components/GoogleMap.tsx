import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,  // Default latitude
  lng: -38.523  // Default longitude
};

const MyGoogleMap: React.FC = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'} // Replace with your key or use an env variable
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* You can place markers, routes, and more here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;
