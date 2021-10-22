import React from "react";
import AppContext from "context/AppContext";
import useInitialState from "hooks/useInitialState";
import Navbar from "components/Navbar/Navbar";
import "style.css";

const MyApp = ({ Component, pageProps }) => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Navbar />
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
};

export default MyApp;
