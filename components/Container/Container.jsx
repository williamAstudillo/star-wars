import React, { useContext } from "react";
import styles from "components/Container/container.module.css";
import ListoOfCharacters from "components/ListOfCharacters/ListoOfCharacters";
import Appcontext from "context/AppContext";

const Container = () => {
  const { state, pagination, showFavorite } = useContext(Appcontext);
  const { next, previous, currentUrl, isFavoriteShow } = state;

  return (
    <div className={styles.container}>
      <button
        className={styles.buttonFavorite}
        type="button"
        onClick={() => showFavorite(currentUrl)}
      >
        Filtrar por favoritos
      </button>
      <ListoOfCharacters />
      {previous && !isFavoriteShow && (
        <button
          type="button"
          className={styles.navigationButton}
          onClick={() => pagination(previous)}
        >
          <i className="fas fa-caret-left" />
          Anterior
        </button>
      )}
      {next && !isFavoriteShow && (
        <button
          type="button"
          className={styles.navigationButton}
          onClick={() => pagination(next)}
        >
          Siguiente
          <i className="fas fa-caret-right" />
        </button>
      )}
    </div>
  );
};

export default Container;
