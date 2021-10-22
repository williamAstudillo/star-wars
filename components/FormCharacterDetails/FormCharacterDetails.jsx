import React, { useContext, useState } from "react";
import Appcontext from "context/AppContext";
import styles from "components/FormCharacterDetails/formCharacterDetails.module.css";

const FormCharacterDetails = ({ index }) => {
  const { state, addOrRemoveFavorite } = useContext(Appcontext);
  const { characters, currentUrl } = state;
  const [character] = useState(characters[index]);

  const {
    name,
    gender,
    birth_year: birthYear,
    films,
    height,
    mass,
    isFavorite = false,
  } = character;
  return (
    <div className={styles.container}>
      <div>
        {/* <h2>{name}</h2> */}
        <input type="text" value={name} />
        <button
          type="button"
          className={styles.icon_button}
          onClick={() => addOrRemoveFavorite(index, currentUrl)}
        >
          {isFavorite ? (
            <i className="fas fa-star fa-2x" />
          ) : (
            <i className="far fa-star fa-2x" />
          )}
        </button>
      </div>
      <input type="text" value={gender} />
      <p>
        Birth date: <input type="text" value={birthYear} />
      </p>
      <p>
        Amount of films: <input type="text" value={films.length} />
      </p>
      <p>
        height: <input type="text" value={height} />
      </p>
      <p>
        | Mass: <input type="text" value={mass} />
      </p>
      <div>
        <button type="button" className={styles.edit_button}>
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default FormCharacterDetails;
