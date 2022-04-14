import { Link} from 'react-router-dom'
import React, { useState } from 'react';

export default function Header() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit=(e)=> {
    alert('clicked');
    e.preventDefault();
  }
  const handleChange=(e)=> {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }


    return (
      <>
        <Link className="logo-link" to="/">
            <img className="logo" 
                  src="https://cdn.shopify.com/s/files/1/0247/8869/7150/files/PERFIL_8X8_e593161c-99c4-4fc6-9298-bcd446412416_180x.jpg?v=1610113370" 
                  alt="Error" width="50" height="60" />
        </Link>
         
        <div className="search-cart-wrapper">
          <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-bar" type="search" value={searchTerm} placeholder="Buscar en todos los productos..." onChange={handleChange}/>
            <Link className="searcho" to="search">
              <input className="search-button" type="submit" value="Submit">
                  {/* <i className="fa fa-search search-button-simbol"></i> */}
              </input>
            </Link>
            
          </form>
          <button><i className="fa fa-shopping-cart cart-legend"> Carrito</i></button>          
        </div>
      </>
    );
  }
