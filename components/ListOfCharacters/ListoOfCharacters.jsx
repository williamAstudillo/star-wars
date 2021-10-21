import React, { useContext } from "react";
import CardDetails from "components/CardDetails/CardDetails";
import styles from "components/ListOfCharacters/listOfCharacters.module.css";
import Appcontext from "context/AppContext";

const ListoOfCharacters = () => {
  const { state, deleteCharacter } = useContext(Appcontext);
  const { characters, currentUrl } = state;
  return (
    <div className={styles.list}>
      {characters.map(
        (
          { name, gender, birth_year: birthYear, isFavorite = false },
          index
        ) => (
          <CardDetails
            key={name}
            name={name}
            gender={gender}
            birthYear={birthYear}
            deleteCharacter={deleteCharacter}
            isFavorite={isFavorite}
            index={index}
            url={currentUrl}
          >
            {name}
          </CardDetails>
        )
      )}
    </div>
  );
};

export default ListoOfCharacters;
