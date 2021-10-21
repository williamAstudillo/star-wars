import React, { useContext } from "react";
import styles from "components/Container/container.module.css";
import ListoOfCharacters from "components/ListOfCharacters/ListoOfCharacters";
import Appcontext from "context/AppContext";

const ContainerCharacters = () => {
  const { state, pagination } = useContext(Appcontext);
  const { next, previous } = state;
  return (
    <div className={styles.container}>
      <button className={styles.buttonFavorite} type="button">
        Filtrar por favoritos
      </button>
      <ListoOfCharacters />
      {previous && (
        <button
          type="button"
          className={styles.navigationButton}
          onClick={() => pagination(previous)}
        >
          <i className="fas fa-caret-left" />
          Anterior
        </button>
      )}
      {next && (
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

export default ContainerCharacters;
