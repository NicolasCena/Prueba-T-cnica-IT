import React, { useState, useEffect} from 'react'
import { Aparcamiento } from './Aparcamiento'
import { Loading } from '../Loading'

export const SearchAparcamiento = () => {
    const [aparcamientos, setAparcamientos] = useState(null)
    const [errorLlamada, setErrorLlamada] = useState('')
    const [errorGeo, setErrorGeo] = useState('')
    const [ state, setState ] = useState([])

    const llamadaApi = () => {
        try {
        fetch('https://cors-anywhere.herokuapp.com/https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json')
            .then(response => response.json())
            .then(data => {
            setAparcamientos(Object.values(data))
            })
        } catch (error) {
            setErrorLlamada(error)
        }
    }

    const verificarGeo = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                setErrorGeo(error)
            },
            {
                enableHighAccuracy: true,
            }
        )
    }


    useEffect(() => {
        verificarGeo()
        llamadaApi()
    }, [])



    
  return (
    <div>
    {
        aparcamientos === null ? <Loading/>
        :
        (
            <table className="table table-dark table-striped text-center ">
                <thead >
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col" >Direccion</th>
                        {
                            errorGeo ?  null : (<th scope="col">Distancia</th>)
                        }
                    </tr>
                </thead>
                <tbody>
            {
                aparcamientos[1].map((info, index) => (
                    <Aparcamiento key={index} info={info} state={state} errorGeo={errorGeo}/>
                ))
            }
                </tbody>
            </table>
        )       

    }
    </div>
  )
}
