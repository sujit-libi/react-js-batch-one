import React from 'react';
// import CityItem from './CityItem';
import styles from './CountryList.module.css';
import { Link } from 'react-router-dom';

function CountryList({ cities }) {
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city, index) => {
          // return <CityItem city={city} key={index} />;
          return (
            <Link to={`${city.id}?lng=12&lat=23&name=bishnu`}>
              {city.country}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default CountryList;
