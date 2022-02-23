import React from "react";
import { ResultWeather } from "./ResultWeather";
import '../../styles/searchWeather.sass';

export const SearchWeather = ({weather, setLocation, location,searchLocation}) => {
  
  return (
    <div className="SearchWeather__container">
      <div className="buscador">
        <p className="buscador__text">Locación:</p>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          className="buscador__input"
        />
        <button onClick={(location) => searchLocation(location)}>Buscar</button>
      </div>
      {
        weather !== undefined ? 
          <ResultWeather weather={weather}/> :
        <h1>Busca el clima en alguna región</h1>
      }
      
    </div>
  );
}

