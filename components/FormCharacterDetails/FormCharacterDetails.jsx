import React, { useContext, useState } from "react";
import Appcontext from "context/AppContext";
import styles from "components/FormCharacterDetails/formCharacterDetails.module.css";
import { useForm } from "react-hook-form";
import ModalConfirmation from "components/ModalConfirmation/ModalConfirmation";
import { useRouter } from "next/router";

const FormCharacterDetails = ({ index, showModal, setShowModal }) => {
  const { state, addOrRemoveFavorite, modifyCharacter } =
    useContext(Appcontext);
  const { characters, currentUrl } = state;

  const [character] = useState(characters[index]);

  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const title = "Tienes cambios sin guardar";
  const description =
    "Si abandonas la pagina sin guardar perderas los cambios realizados";

  const {
    name,
    gender,
    birth_year: birthYear,
    films,
    height,
    mass,
    isFavorite = false,
  } = character;

  setValue("name", name);
  setValue("gender", gender);
  setValue("birthYear", birthYear);
  setValue("films", films.length);
  setValue("height", height);
  setValue("mass", mass);

  const onSubmit = (data) => {
    const characterNewInfo = {
      ...character,
      name: data.name,
      gender: data.gender,
      birth_year: data.birth_year,
      films: new Array(parseInt(data.films, 10)),
      height: data.height,
      mass: data.mass,
    };
    modifyCharacter(index, characterNewInfo);
    router.push("/");
  };

  return (
    <>
      <ModalConfirmation
        show={showModal}
        setShowModal={setShowModal}
        title={title}
        description={description}
      />
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>
          <input type="text" {...register("name")} />
          <div>
            <button
              type="button"
              className={styles.icon_button}
              onClick={() => addOrRemoveFavorite(index, currentUrl)}
            >
              {isFavorite ? (
                <i className="fas fa-star fa-2x" />
              ) : (
                <i className="far fa-star fa-2x" />
              )}
            </button>
          </div>
        </div>
        <div className={styles.container_text_details}>
          <div>
            <input type="text" {...register("gender")} />
          </div>
          <div>
            Birth date: <input type="text" {...register("birthYear")} />
          </div>
          <div>
            Amount of films: <input type="number" {...register("films")} />
          </div>
          <div className={styles.inline_text}>
            height: <input type="text" {...register("height")} />
          </div>
          <div className={styles.inline_text}>
            | Mass: <input type="text" {...register("mass")} />
          </div>
          <div className={styles.container_edit_button}>
            <button type="submit">Guardar cambios</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCharacterDetails;
