import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles/detail.module.css'
import NavBar from '../../Components/NavBar/Navbar'
// import Card from '../Components/Card';

const Detail = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [dentista, setDentista] = useState([])

    const getDentista = async()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const data = await res.json()
        setDentista(data)
    }

    useEffect(()=>{
        getDentista();
    }, [params]);
    
    const handleGoBack = () => {
        navigate(-1);
      };


    return (
        <div className={styles.detail}>
            <NavBar/>
            <div className={styles.card}>
                <h1>Nombre: {dentista.name}</h1>
                <div className={styles.p}>
                    <p><strong>Numero de dentista: </strong>{dentista.id}</p>
                    <p><strong>Email: </strong>{dentista.email}</p>
                </div>
                <button className={styles.button} onClick={handleGoBack}>Volver</button>
            </div>
        </div>

    )
}

export default Detail