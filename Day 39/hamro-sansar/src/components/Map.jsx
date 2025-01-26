import React from 'react';
import styles from './Map.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let lat = searchParams.get('lat');
  let lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lag: 23, lng: 50 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
