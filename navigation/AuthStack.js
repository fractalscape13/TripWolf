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
          name="SignIn"
          component={SignInScreen}
          options={{
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
          }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerRight: null,
          }}
        />
        <AuthStack.Screen
          name="Loading"
          component={LoadingScreen}
          options={() => ({
            headerTitle: () => <Header isSplash={true} subheaderTitle={" "}/>,
            headerStyle: headerStyle,
            headerLeft: null,
          })}
        />
        <AuthStack.Screen
          name="SignOut"
          component={signOut}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};