import React from "react";
import { Link } from 'react-router-dom'
import styles from './styles/card.module.css'


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
    <div className={styles.card}>
        {/* En cada card deberan mostrar en name - username y el id /}

        {/ No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle /}

        {/ Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <div className={styles.info}>
            <Link className={styles.link} to={`/dentista/${data.id}`} key={data.id}>
              <p>{data.id}</p>
              <p className={styles.name}>{data.name}</p>
              <p className={styles.p}><strong>Email:</strong><span>{data.email}</span> </p>
              <p className={styles.p}><strong>Company:</strong> <span>{data.company.name}</span> </p>
            </Link>
          </div>
          
          <button onClick={addFav} className={styles.fav}>Agregar favorito</button>
    </div>
  );
};

export default Card;