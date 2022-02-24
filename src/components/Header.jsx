import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-start">
          <Link className="navbar-brand" to="/">Multi App</Link>
          <Link className="nav-item nav-link text-light" to="/AppAparcamiento">Aparcamiento</Link>
          <Link className="nav-item nav-link text-light" to="/AppClima">Clima</Link>
        </div>
      </nav>
    </header>
  )
}
