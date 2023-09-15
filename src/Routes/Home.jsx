import { Link } from 'react-router-dom';
import Card from '../Components/Card'
import React, { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([])

  const getDentistas = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setDentistas(data)
  }

  useEffect(()=>{
    getDentistas()
  })


  return (
    <main className="" >
          
       <div className='grid'>
              {dentistas.length 
                  ? dentistas.map(dentista => (<Link to={`/dentista/${dentista.id}`} key={dentista.id}>
                  <Card data={dentista} />
                </Link>))
                  : null
              }
      </div>
    </main>
  )
}

export default Home