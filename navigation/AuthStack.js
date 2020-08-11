import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Header from '../components/Header';

const AuthStack = createStackNavigator();

export const renderAuthStack = () => {
  const headerStyle = {
    backgroundColor: "#161616",
    width: "100%",
    height: 100,
  };

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerTitle: () => <Header isSplash={true}/>,
            headerStyle: headerStyle,
          }}
        />
        <AuthStack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTitle: () => <Header isHome={false} subheaderTitle={"Create Account"}/>,
            headerStyle: headerStyle,
            headerLeft: null,
            headerRight: null
          }}
        />
        <AuthStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
            headerLeft: null
          })}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};