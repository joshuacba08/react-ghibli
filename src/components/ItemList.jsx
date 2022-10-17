import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const URL = "https://ghibliapi.herokuapp.com/films";

  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <section className="flex flex-wrap justify-between items-center gap-20 my-20">
      {films.length > 0 ? (
        films.map((el) => <Item key={el.id} film={el} />)
      ) : (
        <p>Cargando películas...</p>
      )}
    </section>
  );
};

export default ItemList;
