import ComboGroup from '../components/combogroup'

export default function Search() {
    return (
      <>
        <p>Su búsqueda de "whopper" muestra lo siguiente:</p>
        <div className="search-results">
            <ComboGroup />
            <ComboGroup />
            <ComboGroup />
        </div>
      </>
    );
  }
