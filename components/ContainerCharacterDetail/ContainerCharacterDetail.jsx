import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Appcontext from "context/AppContext";
import FormCharacterDetails from "components/FormCharacterDetails/FormCharacterDetails";
import CharacterDetail from "components/CharacterDetail/CharacterDetail";
import styles from "components/ContainerCharacterDetail/containerCharacterDetail.module.css";

const ContainerCharacterDetail = ({ index }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { state } = useContext(Appcontext);
  const { characters } = state;

  const router = useRouter();

  const handleClick = () => {
    if (showForm) setShowModal(true);
    else router.push("/");
  };

  return (
    <div className={styles.character_detail}>
      <div className={styles.link_backward}>
        <button type="button" onClick={handleClick}>
          <i className="fas fa-chevron-left" />
          <p>Volver al listado</p>
        </button>
      </div>
      {!showForm && (
        <CharacterDetail
          setShowForm={setShowForm}
          index={index}
          characters={characters}
        />
      )}
      {showForm && (
        <FormCharacterDetails
          index={index}
          showModal={showModal}
          setShowModal={setShowModal}
          characters={characters}
        />
      )}
    </div>
  );
};

export default ContainerCharacterDetail;
