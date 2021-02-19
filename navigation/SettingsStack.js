import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';

const SettingsStack = createStackNavigator();

export const renderSettingsStack = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTitle: () => <Header subheaderTitle={"Settings"}/>,
            headerStyle: headerStyle,
          }}
        />
        <SettingsStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerTitle: () => <Header isHome={false} subheaderTitle={"Edit Profile"}/>,
            headerStyle: headerStyle,
            headerLeft: null,
            headerRight: null
          }}
        />
        <SettingsStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </SettingsStack.Navigator>
  );
};