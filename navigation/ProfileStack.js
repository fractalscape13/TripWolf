import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';

const ProfileStack = createStackNavigator();

export const renderProfileStack = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: () => <Header subheaderTitle={"Profile"}/>,
            headerStyle: headerStyle,
          }}
        />
        <ProfileStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerTitle: () => <Header isHome={false} subheaderTitle={"Edit Profile"}/>,
            headerStyle: headerStyle,
            headerLeft: null,
            headerRight: null
          }}
        />
        <ProfileStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </ProfileStack.Navigator>
  );
};