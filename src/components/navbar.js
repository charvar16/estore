import { Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-links">
                <Link className="menu" to="collections">NUESTRO MENU</Link>
                <div className="nav-dropdown">
                    <Link className="dropdown-links" to="collections/a-la-parrilla">COMBOS A LA PARRILLA</Link>
                    <Link className="dropdown-links" to="collections/combos-king-jr">COMBOS KING JR</Link>
                    <Link className="dropdown-links" to="collections/acompanantes"> ACOMPAÑANTES</Link>
                </div>
            </div>

            <div className="cart-small">
                <Link to="search">
                    <i className="fa fa-search search-small"></i>
                </Link>
                <Link to="cart">
                    <i className="fa fa-shopping-cart cart-wo-legend"></i>
                </Link>
            </div>
        </div>
    );
  }

  /*
  
  <div className="nav">
              
              <Link to="collections/frontpage">COMBOS SANDWICH DE POLLO</Link>
              <Link to="collections/combos-king-jr">COMBOS KING JR</Link>
              <Link to="collections/acompanantes"> ACOMPAÑANTES</Link>
              <Link to="collections/a-la-carta">A LA CARTA</Link>
              <Link to="collections/promociones">PROMOCIONES</Link>

              <Link to="search">o</Link>
          </div>

  */