import React, { useContext, useState } from "react";
import Appcontext from "context/AppContext";
import Layout from "components/layout/Layout";
import CardDetails from "components/CardDetails/CardDetails";
import ModalConfirmation from "components/ModalConfirmation/ModalConfirmation";
import styles from "components/ListOfCharacters/listOfCharacters.module.css";

const ListoOfCharacters = () => {
  const [showModal, setShowModal] = useState(false);
  const [nameCharacter, setNameCharacter] = useState("");
  const { state, deleteCharacter } = useContext(Appcontext);
  const { characters, currentUrl } = state;
  const title = "Seguro que quieres borrar?";
  const description = "Si borras, la acción no se podrá deshacer";

  return (
    <>
      <ModalConfirmation
        show={showModal}
        setShowModal={setShowModal}
        deleteCharacter={deleteCharacter}
        url={currentUrl}
        name={nameCharacter}
        title={title}
        description={description}
      />
      <Layout>
        <div className={styles.list}>
          {characters.map((character, index) => (
            <CardDetails
              key={character.name}
              character={character}
              setShowModal={setShowModal}
              index={index}
              setName={setNameCharacter}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ListoOfCharacters;
