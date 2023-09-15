import React from 'react'
import { Outlet,Link } from "react-router-dom"
import { useContext } from 'react'
import ThemeContext from '../context'
import './navbar.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ThemeContext)
  return (
    <div>
    <nav className='navbar'>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas /}
      {/ Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}
            style={{backgroundColor: theme.background, color:theme.font}}
            >
                Cambiar Tema
            </button>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navbar