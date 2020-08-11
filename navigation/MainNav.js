import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import signOut from '../components/SignOut';

const MainNav = createDrawerNavigator();

export const renderMainNav = (
    <NavigationContainer independent={true} >
      <MainNav.Navigator initialRouteName="Home"
      drawerPosition={"right"}
      drawerStyle={{backgroundColor: "#161616", color: "white"}}
      drawerContentOptions={{activeTintColor: "white",inactiveTintColor: "#DDE2E4", height: "100%", activeBackgroundColor: "#535756"}}
      >
        <MainNav.Screen name="Home" component={TabNav}/>
        <MainNav.Screen name="Profile" component={ProfileStack}/>
        <MainNav.Screen name="About" component={AboutScreen}/>
        <MainNav.Screen name="Sign out" component={() => signOut()}/>
      </MainNav.Navigator>
    </NavigationContainer>
  )