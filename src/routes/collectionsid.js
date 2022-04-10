import { useParams } from 'react-router-dom'

export default function Collectionsid() {
    let params = useParams()
    return (
      <div>
        <p>{params.id} </p>
      </div>
    );
  }

// {params.id}