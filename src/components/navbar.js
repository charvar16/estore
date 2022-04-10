import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="wrapper">
                <Link to="collections">NUESTRO MENU</Link>
            </div>
        </div>
    );
  }

  /*
  
  <div className="nav">
              <Link to="collections/a-la-parrilla">COMBOS A LA PARRILLA</Link>
              <Link to="collections/frontpage">COMBOS SANDWICH DE POLLO</Link>
              <Link to="collections/combos-king-jr">COMBOS KING JR</Link>
              <Link to="collections/acompanantes"> ACOMPAÑANTES</Link>
              <Link to="collections/a-la-carta">A LA CARTA</Link>
              <Link to="collections/promociones">PROMOCIONES</Link>

              <Link to="search">o</Link>
          </div>

  */