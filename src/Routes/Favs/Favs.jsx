import React from "react";
import styles from './styles/favs.module.css'
import NavBar from '../../Components/NavBar/Navbar'

const Favs = () => {
  // Obtén los favoritos del localStorage
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <>
      <div className={styles.cards}>
        <NavBar/>
        <h1>Dentistas favoritos</h1>
        <div>
          {favoritos.length > 0 ? (
            favoritos.map(dentista => (
              <div key={dentista.id} className={styles.grid}>
                <p className={styles.p}><strong>Nombre del dentista:</strong> {dentista.name}</p>
                <p className={styles.p}><strong>Email:</strong>{dentista.email}</p>
                <p className={styles.p}><strong>Compañía:</strong>{dentista.company.name}</p>
                {/* Muestra otros detalles del dentista según sea necesario */}
              </div>
            ))
          ) : (
            <p>No hay dentistas en favoritos</p>
          )}

        </div>
      </div>
    </>
  );
};

export default Favs;
