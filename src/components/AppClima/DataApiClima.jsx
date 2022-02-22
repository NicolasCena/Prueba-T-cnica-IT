import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResultWeather } from "./ResultWeather";
import '../../styles/dataApiClima.sass';

export const DataApiClima = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?appid=f007a3c9ee92c1b7b37a2f177f6f083b&q=${location}&units=metric&lang=es`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

    

  return (
    <div className="container">
      <div className="buscador">
        <p className="buscador__text">Locación:</p>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
          className="buscador__input"
        />
      </div>
      <ResultWeather data={data}/>
    </div>
  );
}

