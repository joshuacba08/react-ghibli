import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const URL = "https://run.mocky.io/v3/c38dfed6-bc92-4cc1-9bcb-ed52bd12c7a2";

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
