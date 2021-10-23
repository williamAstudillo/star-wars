import React from "react";
import useInitialState from "hooks/useInitialState";
import AppContext from "context/AppContext";
import Header from "components/Header/Header";
import "style.css";

const MyApp = ({ Component, pageProps }) => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
};

export default MyApp;
