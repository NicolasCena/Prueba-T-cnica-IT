
//Styles
import '../../styles/resultWeather.sass';

export const ResultWeather = ({weather}) => {

  return (
    
    <div className="ResultWeather__container">
      <div className="container__informacion">

        <div className="informacion__central">
        {weather.weather ? <img src={`http://openweathermap.org/img/wn//${weather.weather[0].icon}@4x.png`} alt="weather icon" className="w-icon"/> : null}
          {/*  */}
          <div className="location">
            <h2>{weather.name}</h2>
          </div>
          <div className="temp">
            {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : null}
            {weather.weather ? <h2 className='weather_description-text'>{weather.weather[0].description}</h2> : null}
          </div>
        </div>

        <div className="container__segunda-informacion">
        {weather.name !== undefined && (
          <>
            <div className="container__sensaciontermica information">
              <p className='information-title'>Sensacion Termica:</p>
              {weather.main ? (
                <p className="sensaciontermica ">{weather.main.feels_like.toFixed()}°C</p>
              ) : null}
            </div>
            <div className="container__humedad information">
              <p className='information-title'>Humedad: </p>
              {weather.main ? <p className="humedad">{weather.main.humidity}%</p> : null}
            </div>
            <div className="container__windy information">
              <p className='information-title'>Velocidad del viento: </p>
              {weather.wind ? (
                <p className="windy">{weather.wind.speed.toFixed()} MPH</p>
              ) : null}
            </div>
          </>
        )}
        </div>

        </div>
      </div>
  )
}
