import React, { useContext, useState } from "react";
import Link from "next/Link";
import Appcontext from "context/AppContext";
import styles from "components/CharacterDetail/characterDetail.module.css";

const CharacterDetail = ({ index }) => {
  const { state, addOrRemoveFavorite } = useContext(Appcontext);
  const { characters } = state;
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
    <div className={styles.character_detail}>
      <Link href="/">
        <div className={styles.link_backward}>
          <i className="fas fa-chevron-left" />
          <p>Volver al listado</p>
        </div>
      </Link>
      <div className={styles.container}>
        <div>
          <h2>{name}</h2>
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
        <p>{gender}</p>
        <p>Birth date: {birthYear}</p>
        <p>Amount of films: {films.length}</p>
        <p>height: {height}</p>
        <p>| Mass: {mass}</p>
        <div>
          <button type="button" className={styles.edit_button}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
