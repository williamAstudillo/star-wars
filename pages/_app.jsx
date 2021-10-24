import React from "react";
import Header from "components/Header/Header";
import Store from "Store/Store";
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
