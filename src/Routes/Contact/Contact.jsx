import React from 'react'
import Form from '../../Components/Form/Form'
import { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import styles from './style/contact.module.css'
import NavBar from '../../Components/NavBar/Navbar'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [usuarios, setUsuarios] = useState([])

  const addUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario])
  }
  return (
    <div className={styles.page}>
      <NavBar/>
      <div className={styles.form}>
        <h1>Want to know more?</h1>
        <p className={styles.p}>Send us your questions and we will contact you</p>
        <Form onAddUsuario={addUsuario}/>
      </div>  
      <Footer/>
    </div>
  )
}

export default Contact