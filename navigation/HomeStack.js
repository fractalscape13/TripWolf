import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

export const renderHomeStack = () => {
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