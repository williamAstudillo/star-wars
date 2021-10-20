import React from "react";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
