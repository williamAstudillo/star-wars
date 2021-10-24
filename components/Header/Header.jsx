import React from "react";
import styles from "components/Header/header.module.css";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Star-wars</title>
      </Head>
      <nav className={styles.header}>
        <h1>Star wars characters</h1>
        <div />
      </nav>
    </>
  );
};

export default Header;
