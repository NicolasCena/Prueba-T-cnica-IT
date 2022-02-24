import React, { useEffect, useState } from "react";
import axios from "axios";

//Components
import { SearchWeather } from "../components/AppClima/SearchWeather";


export const AppClima = () => {


const [ weather, setWeather] = useState([]);
const [ location, setLocation] = useState("");
const [ error, setError ] = useState("");
const [ flag, setFlag ] = useState(false);

const URLBUSQUEDA = `https://api.openweathermap.org/data/2.5/weather?appid=f007a3c9ee92c1b7b37a2f177f6f083b&q=${location}&units=metric&lang=es`;
const URLSTANDAR = `https://api.openweathermap.org/data/2.5/weather?appid=f007a3c9ee92c1b7b37a2f177f6f083b&q=uruguay&units=metric&lang=es`;

const searchLocation = () => {
  try {
    axios.get(URLBUSQUEDA)
    .then((response) => {
    setWeather(response.data)
    localStorage.setItem("weather", JSON.stringify(response.data))
    setFlag(false)
  })
  } catch (error) {
    setError(error)
  }

}


const Llamada = () => {
  let clima = JSON.parse(localStorage.getItem("weather"))
  if(clima) {
    setWeather(clima)
  }
  else{
  setFlag(true)
}
}
useEffect(() => {
  Llamada()
}, [])

// const searchLocationTwo = () => {
//   try {
//     axios.get(URLSTANDAR)
//     .then((response) => {
//     setWeather(response.data)
//   })
//   } catch (error) {
//     setError(error)
//   }
// }
// searchLocationTwo()
// }

  return (
    <SearchWeather
    weather={weather} 
    setLocation={setLocation} 
    setWeather={setWeather} 
    location={location}
    searchLocation={searchLocation}
    flag={flag}
    />
  )
}
