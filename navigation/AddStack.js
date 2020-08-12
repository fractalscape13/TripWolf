import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';
import AddScreen from '../screens/AddScreen';

const AddStack = createStackNavigator();

export const renderAddStack = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
      <AddStack.Navigator>
        <AddStack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            headerTitle: () => <Header isHome={true}
            subheaderTitle={"Add a new entry"}/>,
            headerStyle: headerStyle,
          }}
        />
        {/* <AddStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerTitle: () => <Header isHome={false} subheaderTitle={"Edit Profile"}/>,
            headerStyle: headerStyle,
            headerLeft: null,
            headerRight: null
          }}
        /> */}
        <AddStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </AddStack.Navigator>
  );
};