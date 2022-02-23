import React, { useState, useEffect} from 'react'
import { Aparcamiento } from './Aparcamiento'

export const SearchAparcamiento = () => {

    const [aparcamientos, setAparcamientos] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errormes, setError] = useState(null)

    const llamadaApi = () => {
        try {
        fetch('https://cors-anywhere.herokuapp.com/https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json')
        .then(response => response.json())
        .then(data => {
        setAparcamientos(Object.values(data))
        })
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        llamadaApi()
    }, [])




    
  return (
    <>
    {
        aparcamientos === null ? 'null' 
        :
        (
            <table className="table table-dark table-striped text-center">
                <thead >
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Ir</th>
                    </tr>
                </thead>
                <tbody>
            {
                aparcamientos[1].map((info, index) => (
                    <Aparcamiento key={index} info={info} />
                ))
            }
                </tbody>
            </table>
        )       

    }
    </>
  )
}
