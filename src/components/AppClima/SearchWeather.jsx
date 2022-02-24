import React from "react";
import { ResultWeather } from "./ResultWeather";
import { NoWeather } from "./NoWeather";
import '../../styles/searchWeather.sass';

export const SearchWeather = ({weather, setLocation, location,searchLocation, flag}) => {
  
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
        flag === true ? 
            <NoWeather />
           :
           <ResultWeather weather={weather}/>
      }
      
    </div>
  );
}

