import ComboGroup from '/home/mrrobot/Desktop/clone/src/components/comboGroup'

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
