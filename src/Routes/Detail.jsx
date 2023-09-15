import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import Card from '../Components/Card';

const Detail = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [dentista, setDentista] = useState([])

    const getDentista = async()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const data = await res.json()
        setDentista(data([0]))
    }

    useEffect(()=>{
        getDentista();
    }, [params]);
    
    const handleGoBack = () => {
        navigate(-1);
      };


    return (
        <div>
            <h2>Numero de Dentista {params.id}</h2>
            <div className='card'>
                <p>{dentista.name}</p>
                <p>{dentista.email}</p>
                <p>{dentista.company.name} </p>
            </div>
            <button onClick={handleGoBack}>Go back</button>
        </div>

    )
}

export default Detail