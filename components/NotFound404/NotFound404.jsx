import React from "react";
import { useRouter } from "next/router";
import styles from "components/NotFound404/notFound404.module.css";

const NotFound404 = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h2>Página no encontrada</h2>
      <div>
        <button type="button" onClick={() => router.push("/")}>
          Volver a listado
        </button>
      </div>
    </div>
  );
};

export default NotFound404;
