import Combo from '../components/combo'

export default function Search() {
    return (
      <div className="search">
        <div className="search-terms">
        <p>Su búsqueda de "whopper" muestra lo siguiente:</p>
        <input className="search-results-bar" type="search"/>
        </div>
        <div className="search-results">
            <Combo />
            <Combo />
            <Combo />
            <Combo />
            <Combo />
            <Combo />
            <Combo />
        </div>
      </div>
    );
  }
