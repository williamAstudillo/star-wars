import React from "react";
import Link from "next/Link";
import styles from "components/CardDetails/cardDetails.module.css";

const CardDetails = ({ character, setShowModal, setName, index }) => {
  const { name, gender, isFavorite, birth_year: birthYear } = character;

  const handleClickDelete = () => {
    setShowModal(true);
    setName(name);
  };

  return (
    <div className={styles.container}>
      <div>
        <button type="button" onClick={handleClickDelete}>
          x
        </button>
      </div>
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

export default CardDetails;
