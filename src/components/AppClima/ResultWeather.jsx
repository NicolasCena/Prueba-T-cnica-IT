//Styles
import '../../styles/resultWeather.sass';

export const ResultWeather = ({data}) => {

  console.log(data)
  return (
    <div className="container">
      <div className="container__informacion">

        <div className="data__central">
          <img src={`http://openweathermap.org/img/wn//${data.weather[0].icon}@4x.png`} alt="weather icon" class="w-icon"/>
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            {data.weather ? <h2 className='weather_description-text'>{data.weather[0].description}</h2> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="container__segunda-informacion">
            <div className="container__sensaciontermica information">
              <p className='information-title'>Sensacion Termica:</p>
              {data.main ? (
                <p className="sensaciontermica ">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
            </div>
            <div className="container__humedad information">
              <p className='information-title'>Humedad: </p>
              {data.main ? <p className="humedad">{data.main.humidity}%</p> : null}
            </div>
            <div className="container__windy information">
              <p className='information-title'>Velocidad del viento: </p>
              {data.wind ? (
                <p className="windy">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
            </div>
          </div>
        )}
        </div>
      </div>
  )
}
