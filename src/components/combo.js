import { Link } from 'react-router-dom'

export default function Combo() {
    const bundles = ['']
    return (
      <div className="wrapper">
        <div id="combo-unit">
            <Link to="collections/bundles-familiares">
                <img className="combo-img" src="//unsplash.it/705/705" alt="Error"/>
            </Link>
            <p>Nombre</p>
            <p>Precio</p>            
        </div>
      </div>
    );
  }
