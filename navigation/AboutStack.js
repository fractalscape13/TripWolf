import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";
import Header from '../components/Header';

const AboutStack = createStackNavigator();

const mainHeaderStyle = {
  backgroundColor: "#161616",
  height: 100
}

export const renderAboutStack = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name='About'
        component={AboutScreen}
        options={{
          headerTitle: () => <Header subheaderTitle={"About"}/>,
          headerStyle: mainHeaderStyle
        }}
      />
    </AboutStack.Navigator>
  );
};