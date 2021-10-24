import React, { useState, useContext, useEffect } from "react";
import Appcontext from "context/AppContext";
import styles from "components/CharacterDetail/characterDetail.module.css";

const CharacterDetail = ({ characters, setShowForm, index }) => {
  const [character, setCharacter] = useState(() => characters[index]);
  const { addOrRemoveFavorite } = useContext(Appcontext);

  useEffect(() => {
    setCharacter(characters[index]);
  }, [index]);

  if (!character) return <p>Loading...</p>;

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
        <div>
          <button
            type="button"
            className={styles.icon_button}
            onClick={() => addOrRemoveFavorite(index)}
          >
            {isFavorite ? (
              <i className="fas fa-star fa-2x" />
            ) : (
              <i className="far fa-star fa-2x" />
            )}
          </button>
        </div>
      </div>
      <div className={styles.container_text_details}>
        <p>{gender}</p>
        <p>Birth date: {birthYear}</p>
        <p>Amount of films: {films.length}</p>
        <p>height: {height}</p>
        <p>| Mass: {mass}</p>
      </div>
      <div className={styles.container_edit_button}>
        <button type="button" onClick={() => setShowForm(true)}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default CharacterDetail;
