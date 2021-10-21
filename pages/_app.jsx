import React from "react";
import "style.css";
import AppContext from "context/AppContext";
import useInitialState from "hooks/useInitialState";

const MyApp = ({ Component, pageProps }) => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
};

export default MyApp;
