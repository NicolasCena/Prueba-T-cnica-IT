import { Link } from 'react-router-dom';
import imageAparcamiento from '.././assets/imageAparcamiento.png';
import imageClima from '.././assets/imageClima.png';

export const  Home = () => {
  return (
    <div className=' py-3 h-100'>
        <div className='text-center'>
            <h1>Bienvenidos</h1>
            <p><span className='fw-bold'>Desarrollador:</span> Nicolás Cena</p>
        </div>
        <p className='fw-bold mx-2'>Detalles y explicaciones: </p>
        <ul className='m-3'>
            <li>Existen dos aplicaciones en la web - Aparcamientos de Madrid y Busqueda del clima</li>
            <li>La aplicación del clima está estructura puramente con SASS y la aplicación de aparcamientos con Bootstrap</li>
            <li>En la aplicación del aparcamiento utilizo <span className='fw-bold'>https://cors-anywhere.herokuapp.com/</span> para acceder a la ruta de la API, pero también se puede utilizar la extensión <span className='fw-bold'>Moesif Origin y CORS Changer</span> para evitar el problema con los CORS</li>
            <li>La aplicación del aparcamiento requiere tener activa la geolocalización para calcular la distancia entre el aparcamiento y la localización del usuario. Si el usuario no la tiene activada, solo no verá esa información</li>
        </ul>
        <div className='container '>
          <div className='row d-flex justify-content-center align-items-center w-100 text-center'>
            <div className='col-12 col-lg-6 px-lg-2 text-center'>
              <Link to="/AppAparcamiento">
                <img src={imageAparcamiento} alt="Aparcamiento"  style={{ width: "40%", height: "40%"}}/>
              </Link>
            </div>
            <div className='col-12 col-lg-6 px-lg-2'>
              <Link to="/AppClima" >
                <img src={imageClima} alt="Clima"  style={{ width: "40%", height: "40%"}} />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
