import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';
import MapScreen from '../screens/ExploreScreen';

const ExploreStack = createStackNavigator();

export const renderExploreStack = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
      <ExploreStack.Navigator>
        <ExploreStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTitle: () => <Header isHome={true}
            subheaderTitle={"Explore"}/>,
            headerStyle: headerStyle,
          }}
        />
        <ExploreStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </ExploreStack.Navigator>
  );
};