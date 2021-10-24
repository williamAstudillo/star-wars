import React from "react";
import Header from "components/Header/Header";
import Store from "store/Store";
import "style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Store>
        <Header />
        <Component {...pageProps} />;
      </Store>
    </>
  );
};

export default MyApp;
