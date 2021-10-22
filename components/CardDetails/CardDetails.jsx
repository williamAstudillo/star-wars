import React from "react";
import styles from "components/CardDetails/cardDetails.module.css";
import Link from "next/Link";

const CardDetails = ({ character, index, setShowModal, setName }) => {
  const { name, gender, isFavorite, birth_year: birthYear } = character;

  const handleClickDelete = () => {
    setShowModal(true);
    setName(character.name);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClickDelete}>
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

export default CardDetails;
