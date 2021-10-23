import React, { useContext, useState } from "react";
import Appcontext from "context/AppContext";
import styles from "components/CharacterDetail/characterDetail.module.css";

const CharacterDetail = ({ setShowForm, index }) => {
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
        <h2>{name}</h2>
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
      <p>{gender}</p>
      <p>Birth date: {birthYear}</p>
      <p>Amount of films: {films.length}</p>
      <p>height: {height}</p>
      <p>| Mass: {mass}</p>
      <div>
        <button
          type="button"
          className={styles.edit_button}
          onClick={() => setShowForm(true)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default CharacterDetail;
