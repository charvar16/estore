import { Link } from 'react-router-dom'
import Combo from './combo'

export default function ComboGroup() {
    return (
      <div className="wrapper">
        <div className="combo-group">
            <div className="combo-group-header">
                <p className="combo-group-title">BUNDLES FAMILIARES</p>
                <p className="combo-group-link">
                    <Link to="collections/bundles-familiares">Más bundles familiares</Link>
                </p>
            </div>
            <Combo />
        </div>
      </div>
    );
  }
