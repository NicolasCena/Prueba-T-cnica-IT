import React,{ useState, useEffect} from 'react'

export const Aparcamiento = ({info, state, errorGeo}) => {
    const [informacion, setInformacion] = useState(info)
    const [distancia, setDistancia] = useState(null)

    let lat1 = informacion.location.latitude;
    let lat2 = state.latitude;
    let lon1 = informacion.location.longitude;
    let lon2 = state.longitude;
   let getDistanciaMetros = () =>
    {
      let rad = function(x) {return x*Math.PI/180;}
      var R = 6378.137; //Radio de la tierra en km 
      var dLat = rad( lat2 - lat1 );
      var dLong = rad( lon2 - lon1 );
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
      Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
      //aquí obtienes la distancia en metros por la conversion 1Km =1000m
      var d = R * c ; 
      setDistancia(d.toFixed(2)) ; 
    }

    useEffect(() =>{
      getDistanciaMetros()
    }, [])

  return (
    <>
    <tr  className='text-center'>
        <td>{informacion.title}</td>
        <td >
          {Object.values(informacion.address)[4].toLowerCase()}
          <a  className='btn btn-primary d-flex justify-content-center align-items-center' href={`https://www.google.com/maps/@${informacion.location.latitude},${informacion.location.longitude},14z`}>Ir</a>
        </td>
        {errorGeo  ? null : (<td>{distancia} Km</td>) } 

        
    </tr>
    </>
  )
}
