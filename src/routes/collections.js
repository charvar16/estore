import { Outlet } from 'react-router-dom'

export default function Collections() {
    return (
      <div className="prod-container">
        <img className="prod-img" src="https://cdn.shopify.com/s/files/1/0247/8869/7150/products/STACKER_360x.png?v=1647439443" alt="Error" /> 

        <div className="right">
          <p className="title">COMBO RODEO STACKER</p>
          <p className="price">$12.99</p>

          <form action="/action_page.php">
            <p className="label-size prod-labels">TAMAÑO</p>
            <select class="prod-select" value="MEDIANO"> 
                    <option value="mediano">MEDIANO</option>
                    <option value="grande">GRANDE</option>
                    <option value="king">KING</option>
            </select>
            <p className="label-extra prod-labels">CON EXTRA</p>
            <select class="prod-select" value="SIN EXTRA"> 
                    <option value="sin extra">SIN EXTRA</option>
                    <option value="queso">QUESO</option>
                    <option value="queso y tocineta">QUESO Y TOCINETA</option>
            </select>

            <p className="label-acompanantes prod-labels">ACOMPAÑANTES</p>
            <select class="prod-select" value="papas"> 
                    <option value="papas">PAPAS</option>
                    <option value="aros de cebolla">AROS DE CEBOLLA</option>
            </select>

            <button className="carrito prod-bttn prod-select">AGREGAR AL CARRITO</button>
            <button className="comprar prod-bttn prod-select">COMPRAR AHORA</button>
            <p className="description">Disfruta de la Rodeo Stacker y vive una experiencia impactante con los crujientes aros de cebolla que son los protagonistas de esta deliciosa hamburguesa, acompañados de salsa Stacker, salsa BBQ, queso cheddar, tocineta y dos jugosas carnes a la parrilla.</p>
          </form>
        </div>
      </div>
    );
  }
