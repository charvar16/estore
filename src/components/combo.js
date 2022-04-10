import { Link } from 'react-router-dom'

export default function Combo() {
    const bundles = ['']
    return (
        <span id="combo-unit">
            <Link to="collections/bundles-familiares">
                <img className="combo-img" src="https://cdn.shopify.com/s/files/1/0247/8869/7150/products/BUNDLEDELREY400x400_360x.png?v=1631287322" alt="error"/>
                <p>BUNDLE DEL REY</p>
                <span>$24.50</span>                
            </Link>
        </span>
    );
  }

  /* 
  <img className="combo-img" src="https://cdn.shopify.com/s/files/1/0247/8869/7150/products/BIGBUNDLE-400x400_360x.png?v=1604313984" alt="BIG BUNDLE"/>
  <img className="combo-img" src="https://cdn.shopify.com/s/files/1/0247/8869/7150/products/FAMILYBUNDLE-400x400-3_360x.png?v=1611948004" alt="BUNDLE TRIPLE"/>
  <img className="combo-img" src="https://cdn.shopify.com/s/files/1/0247/8869/7150/products/FAMILYBUNDLE-400x400-2_360x.png?v=1611948437" alt="BUNDLE DÚO"/>
  */
