import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const { id } = useParams();
    const URL = "https://ghibliapi.herokuapp.com/films"
    const [film, setFilm] = useState(null);

    const getFilm = async (id) => {
        try {
            const response = await fetch(`${URL}/${id}`);
            const data = await response.json();
            console.log(data);
            setFilm(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        getFilm(id);
    }, [id])
    

  return (
    <main className='mx-auto max-w-screen-xl'>
        
    </main>
  )
}

export default Detail