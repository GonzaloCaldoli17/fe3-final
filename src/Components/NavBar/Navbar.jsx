import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context";
import styles from "./styles/navbar.module.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <Link className={styles.link} to="/home">
            Home
          </Link>
          <Link className={styles.link} to="/contacto">
            Contacto
          </Link>
          <Link className={styles.link} to="/favs">
            Favoritos
          </Link>
        </div>

        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas /}
      {/ Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <div className={styles.themeButton}>
          <button
            onClick={handleChangeTheme}
            // style={{ backgroundColor: theme.background, color: theme.font}}
            className={styles.boton}
          >
            Cambiar Tema
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
