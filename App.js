import React, { useState, useMemo } from 'react';
import firebase from './firebase';
import { createContext } from 'react';
import { LoadingScreen } from './screens/LoadingScreen';
import { renderAuthStack } from './navigation/AuthStack';
import { MainNav } from './navigation/MainNav';
import Footer from './components/Footer';

export const AuthContext = createContext();
console.disableYellowBox = true;

export default () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = firebase.auth();

  const authContext = useMemo(() => {
    return {
      updateUser: () => {
        const user = firebase.auth().currentUser;
        setLoggedIn(true);
      },
    };
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
      <AuthContext.Provider value={authContext}>
         {loggedIn && MainNav}
         {loggedIn === false && loading === false && renderAuthStack()}
         {loggedIn === false && loading === true && LoadingScreen()}
         <Footer />
      </AuthContext.Provider>
  );
}