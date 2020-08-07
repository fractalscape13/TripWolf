import React, { useState, useMemo } from 'react';
import firebase from './firebase';
import { Provider } from 'react-redux';
import {Text, View} from 'react-native';
import { createContext } from 'react';
import LoadingScreen from './screens/LoadingScreen';
import renderAuthStack from './navigation/AuthStack';
import MainNav from './navigation/MainNav';


export const AuthContext = createContext();

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
    // <Provider store={state}>
      <AuthContext.Provider value={authContext}>
        <Text style={{paddingTop: 200, flex: 1, backgroundColor: "cyan", fontSize: 100}}>HELLO</Text>
         {loggedIn && MainNav}
         {loggedIn === false && loading === false && renderAuthStack}
         {loggedIn === false && loading === true && LoadingScreen}
      </AuthContext.Provider>
    //  </Provider>
  );
}
