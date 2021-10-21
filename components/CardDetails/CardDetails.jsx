import React from "react";
import styles from "components/CardDetails/cardDetails.module.css";
import Link from "next/Link";

const Card = ({
  name,
  gender,
  birthYear,
  isFavorite = false,
  deleteCharacter,
  index,
  url,
}) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={() => deleteCharacter(name, url)}>
        x
      </button>
      <Link href={`/character/${index}`}>
        <div className={styles.details}>
          <div>
            <h2>{name}</h2>
            {isFavorite && <i className="fas fa-star" />}
          </div>
          <div>
            <p>{gender} |</p>
            <p>Birth date: {birthYear}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
