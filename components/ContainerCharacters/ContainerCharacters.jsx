import React, { useEffect, useState } from "react";
import styles from "components/ContainerCharacters/containerCharacters.module.css";
import CardDetails from "components/CardDetails/CardDetails";
import axios from "axios";

const ContainerCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const URL = "https://swapi.dev/api/people";

  useEffect(() => {
    axios.get(URL).then(({ data: { results } }) => {
      setCharacters(results);
    });
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.button} type="button">
        Filtrar por favoritos
      </button>
      <div className={styles.list}>
        {
          // eslint-disable-next-line camelcase
          characters.map(({ name, gender, birth_year }) => (
            <CardDetails
              key={name}
              name={name}
              gender={gender}
              // eslint-disable-next-line camelcase
              birthYear={birth_year}
            >
              {name}
            </CardDetails>
          ))
        }
      </div>
    </div>
  );
};

export default ContainerCharacters;
