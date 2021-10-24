import React from "react";
import Store from "Store/Store";
import Header from "components/Header/Header";
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
