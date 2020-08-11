import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from '../navigation/TabNav';
import { renderProfileStack } from '../navigation/ProfileStack';
import AboutScreen from '../screens/AboutScreen';
import signOut from '../components/SignOut';

const MainDrawer = createDrawerNavigator();

const MainNav = (
    <NavigationContainer independent={true} >
      <MainDrawer.Navigator initialRouteName="TabNav"
      drawerPosition={"right"}
      drawerStyle={{backgroundColor: "#161616", color: "white"}}
      drawerContentOptions={{activeTintColor: "white",inactiveTintColor: "#DDE2E4", height: "100%", activeBackgroundColor: "#535756"}}
      >
        <MainDrawer.Screen name="TabNav" component={TabNav}/>
        <MainDrawer.Screen name="Profile" component={renderProfileStack}/>
        <MainDrawer.Screen name="About" component={AboutScreen}/>
        <MainDrawer.Screen name="Sign out" component={() => signOut()}/>
      </MainDrawer.Navigator>
    </NavigationContainer>
  )

  export { MainNav };