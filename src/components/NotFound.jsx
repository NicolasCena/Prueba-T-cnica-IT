import '../styles/notFound.sass'
import NotFoundImage from '.././assets/NotFound.png'

export const NotFound = () => {
  return (
    <div className='notFound__container'>
      <h2>Lo sentimos, no encontramos su página</h2>
      <img src={NotFoundImage} alt="Not Found" />
    </div>
  )
}
