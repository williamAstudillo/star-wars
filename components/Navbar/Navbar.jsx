import React from "react";
import Link from "next/link";
import styles from "components/Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1>Star wars characters</h1>
      </Link>
      <div />
    </nav>
  );
};

export default Navbar;
