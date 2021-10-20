import React from "react";
import styles from "components/CardDetails/cardDetails.module.css";

const Card = ({ name, gender, birthYear }) => {
  return (
    <div className={styles.card_container}>
      <button type="button">x</button>
      <div className={styles.details}>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{gender} |</p>
          <p>Birth date: {birthYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
