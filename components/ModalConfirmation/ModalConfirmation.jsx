import React from "react";
import { Modal } from "react-bootstrap";
import styles from "components/ModalConfirmation/modalConfirmation.module.css";

const ModalConfirmation = ({
  show,
  description,
  title,
  setShowModal,
  deleteCharacter,
  url,
  name,
}) => {
  const handleClickDelete = (nameCaracter, currentUrl) => {
    deleteCharacter(nameCaracter, currentUrl);
    setShowModal(false);
  };
  return (
    <Modal className={styles.modal} show={show}>
      <Modal.Body>
        <h2>
          <b>{title}</b>
        </h2>
        <p>{description}</p>
        <button
          type="button"
          className={styles.button_left}
          onClick={() => setShowModal(false)}
        >
          cancelar
        </button>
        <button
          type="button"
          className={styles.button_right}
          onClick={() => handleClickDelete(name, url)}
        >
          borrar
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConfirmation;
