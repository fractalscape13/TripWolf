import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: () => <Header isHome={true}
            subheaderTitle={" "}/>,
            headerStyle: headerStyle,
          }}
        />
        {/* <HomeStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerTitle: () => <Header isHome={false} subheaderTitle={"Edit Profile"}/>,
            headerStyle: headerStyle,
            headerLeft: null,
            headerRight: null
          }}
        /> */}
        <HomeStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </HomeStack.Navigator>
  );
};

export default HomeStackNav;