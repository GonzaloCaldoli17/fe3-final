import React from "react";

const Favs = () => {
  // Obtén los favoritos del localStorage
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <>
      <div className="card-grid">
        <h2>Dentistas favoritos:</h2>
        {favoritos.length > 0 ? (
          favoritos.map(dentista => (
            <div key={dentista.id} className="card">
              <p><strong>Nombre del dentista:</strong> {dentista.name}</p>
              <p><strong>email:</strong>{dentista.email}</p>
              <p><strong>nombre de la compania:</strong>{dentista.company.name}</p>
              {/* Muestra otros detalles del dentista según sea necesario */}
            </div>
          ))
        ) : (
          <p>No hay dentistas en favoritos</p>
        )}
      </div>
    </>
  );
};

export default Favs;
