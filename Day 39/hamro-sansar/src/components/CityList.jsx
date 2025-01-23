import React from 'react';

function CityList({ cities }) {
  return (
    <div>
      {cities.map((city) => {
        return <div>{city.cityName}</div>;
      })}
    </div>
  );
}

export default CityList;
