import React from "react";
import { Modal } from "react-bootstrap";
import styles from "components/ModalConfirmation/modalConfirmation.module.css";
import Link from "next/link";

const ModalConfirmation = ({
  show,
  description,
  title,
  setShowModal,
  deleteCharacter,
  name,
}) => {
  const handleClickDelete = (nameCaracter) => {
    deleteCharacter(nameCaracter);
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
        {deleteCharacter && (
          <button
            type="button"
            className={styles.button_right}
            onClick={() => handleClickDelete(name)}
          >
            borrar
          </button>
        )}
        {!deleteCharacter && (
          <Link href="/">
            <button type="button" className={styles.button_right}>
              abandonar página
            </button>
          </Link>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalConfirmation;
