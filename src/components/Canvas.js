import { Link } from 'react-router-dom'
import ComboGroup from './comboGroup'

export default function Canvas() {
    const bundles = ['']
    return (
      <div className="wrapper">
        <div className="combos-canvas">
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
        </div>
      </div>
    );
  }
