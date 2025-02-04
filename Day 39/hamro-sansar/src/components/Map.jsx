import React, { useState } from 'react';
import styles from './Map.module.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  const [mapPosition, setMapPosition] = useState([
    40.46635901755316, -3.7133789062500004,
  ]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            <span>Hello</span> <span>Nepal</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
