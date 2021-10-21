import React, { useContext } from "react";
import CardDetails from "components/CardDetails/CardDetails";
import styles from "components/ListOfCharacters/listOfCharacters.module.css";
import Appcontext from "context/AppContext";

const ListoOfCharacters = () => {
  const { state, deleteCharacter } = useContext(Appcontext);
  const { results: characters } = state;
  return (
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
            deleteCharacter={deleteCharacter}
          >
            {name}
          </CardDetails>
        ))
      }
    </div>
  );
};

export default ListoOfCharacters;
