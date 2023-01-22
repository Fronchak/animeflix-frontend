import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/imgs/logo.png'
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black" id="navbar-container" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">Animeflix</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/animes">Animes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
