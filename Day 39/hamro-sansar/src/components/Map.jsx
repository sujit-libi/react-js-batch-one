import React from 'react';
import styles from './Map.module.css';
import { useSearchParams } from 'react-router-dom';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, 'Query String');
  let lat = searchParams.get('lat');
  let lng = searchParams.get('lng');
  let name = searchParams.get('name');
  return (
    <div className={styles.mapContainer}>
      <h2>
        {lat} {lng} {name}
      </h2>
      <button
        onClick={() =>
          setSearchParams({
            lat: 234234234,
            name: 'ayush',
            lng: 'dfsdfd',
          })
        }
      >
        Click me
      </button>
    </div>
  );
}

export default Map;
