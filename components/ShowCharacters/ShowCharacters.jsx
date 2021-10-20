import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const URL = "https://swapi.dev/api/people";

  useEffect(() => {
    axios.get(URL).then(({ data: { results } }) => {
      setCharacters(results);
    });
  }, []);

  return (
    <div>
      <button type="button">Filtrar por favoritossss</button>
    </div>
  );
};

export default ShowCharacters;
