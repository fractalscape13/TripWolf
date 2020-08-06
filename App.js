import React, { useState } from 'react';
import * as firebase from "firebase";
// import { Provider } from "react-redux";
import { createContext } from "react";

export const AuthContext = createContext();

export default () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = firebase.auth();

  return (
    // <Provider store={state}>
      <AuthContext.Provider value={authContext}>
        {loggedIn && MainNav}
        {loggedIn === false && loading === false && AuthStack}
        {loggedIn === false && loading === true && LoadingScreen}
      </AuthContext.Provider>
    // </Provider>
  );
}
