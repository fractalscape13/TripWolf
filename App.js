import React, { useState, useMemo } from 'react';
import firebase from './firebase';
import { createContext } from 'react';
import { renderAuthStack } from './navigation/AuthStack';
import { MainNav } from './navigation/MainNav';
import Footer from './components/Footer';

export const AuthContext = createContext();
console.disableYellowBox = true;

export default () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const authContext = useMemo(() => {
    return {
      updateUser: () => {
        const user = firebase.auth().currentUser;
        setLoggedIn(true);
      },
    };
  }, []);

  return (
      <AuthContext.Provider value={authContext}>
         {loggedIn && MainNav}
         {!loggedIn && renderAuthStack()}
         <Footer />
      </AuthContext.Provider>
  );
}