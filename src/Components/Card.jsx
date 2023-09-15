import React from "react";
import { Link } from 'react-router-dom'


const Card = ({ data}) => {

  const addFav = ()=>{
     // Obtén los favoritos actuales del localStorage o crea un array vacío si no existen
     const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

     // Verifica si el dentista ya está en la lista de favoritos antes de agregarlo
     if (!favoritos.find(fav => fav.id === data.id)) {
       favoritos.push(data); // Agrega el dentista a la lista de favoritos
       localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Guarda la lista en el localStorage
     }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id /}

        {/ No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle /}

        {/ Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentista/${data.id}`} key={data.id}>
          <div className='card'>
              <p>{data.id}</p>
              <p>{data.name}</p>
              <p>{data.email} </p>
              <p>{data.company.name} </p>
          </div>
        </Link>
          <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;