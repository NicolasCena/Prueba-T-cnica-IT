
import '../../styles/noWeather.sass'
import NoWeatherImage from '../../assets/NoWeatherImage.png'

export const NoWeather = () => {
  return (
    <div className='noweather__container'>
      <h2>Busque el clima en su región</h2>
      <img src={NoWeatherImage} alt="Busqueda Weather" />
    </div>
  )
}
