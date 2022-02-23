import React,{ useState} from 'react'

export const Aparcamiento = ({info}) => {
    const [informacion, setInformacion] = useState(info)
    
  return (
    <>
    <tr>
        <th scope="row">1</th>
        <td>{Object.values(informacion.address)[4]}</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    </>
  )
}
