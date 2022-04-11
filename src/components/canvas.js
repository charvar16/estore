import { Link } from 'react-router-dom'
import ComboGroup from './combogroup'

export default function Canvas() {
    const bundles = ['']
    return (
        <div className="combos-canvas">
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
        </div>
    );
  }
