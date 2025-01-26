import React from 'react';
// import CityItem from './CityItem';
import styles from './CountryList.module.css';
import styles1 from './CountryItem.module.css';
import { Link } from 'react-router-dom';

function CountryList({ cities }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div>
      <ul className={styles.cityList}>
        {countries.map((country, index) => {
          // return <CityItem city={city} key={index} />;
          return (
            <Link to={`${country.id}`}>
              <li className={styles1.countryItem}>
                <span>{country.emoji}</span>
                <span>{country.country}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default CountryList;
