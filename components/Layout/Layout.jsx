import React, { useContext } from "react";
import Appcontext from "context/AppContext";
import styles from "components/Layout/layout.module.css";

const Layout = ({ children }) => {
  const { state, pagination, showFavorite } = useContext(Appcontext);
  const { next, previous, isFavoriteShow } = state;

  return (
    <div className={styles.container}>
      <div>
        <button
          className={
            isFavoriteShow
              ? styles.button_favorite_selected
              : styles.button_favorite
          }
          type="button"
          onClick={() => showFavorite()}
        >
          Filtrar por favoritos
        </button>
      </div>
      {children}
      {!isFavoriteShow && (
        <div className={styles.container_button}>
          <button
            type="button"
            className={styles.navigation_button}
            onClick={() => pagination(previous)}
            disabled={!previous}
          >
            <i className="fas fa-caret-left" />
            Anterior
          </button>
        </div>
      )}
      {!isFavoriteShow && (
        <div className={styles.container_button}>
          <button
            type="button"
            className={styles.navigation_button}
            onClick={() => pagination(next)}
            disabled={!next}
          >
            Siguiente
            <i className="fas fa-caret-right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
