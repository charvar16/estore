import Navbar from './navbar'
import Footer from './footer'
import Canvas from './canvas'
export default function Header() {
    return (
      <>
        <img className="logo" 
              src="https://cdn.shopify.com/s/files/1/0247/8869/7150/files/PERFIL_8X8_e593161c-99c4-4fc6-9298-bcd446412416_180x.jpg?v=1610113370" 
              alt="Error" width="50" height="60" /> 
        <div className="search-cart-wrapper">
          <input className="search-bar" type="search" value="Buscar en todos los productos..."/>
          <button className="cart" type="submit">CARRITO</button>
        </div>
      </>
    );
  }
