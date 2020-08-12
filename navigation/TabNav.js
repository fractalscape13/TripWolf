import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MessagingNavigation from './MessagingNavigation';
import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { renderExploreStack } from '../navigation/ExploreStack';
import { renderAddStack } from '../navigation/AddStack';
import { renderHomeStack } from '../navigation/HomeStack';

const TabNav = () => {

  const Tabs = createBottomTabNavigator();

  return (
      <Tabs.Navigator tabBarOptions={{activeBackgroundColor: "#DDE2E4", inactiveBackgroundColor: "#161616", activeTintColor: "#161616", inactiveTintColor: "#DDE2E4", showLabel: false}}>
        <Tabs.Screen 
          name="HomeStack" 
          component={renderHomeStack} 
          options={{
            tabBarIcon: ({color}) => (<FontAwesome name="home" size={28} color={color} />),
          }}
          />
        <Tabs.Screen 
          name="AddStack" 
          component={renderAddStack}
          options={{
            tabBarIcon: ({color}) => (<FontAwesome5 name="plus" size={28} color={color}/>)
          }} />
        <Tabs.Screen 
          name="ExploreStack" 
          component={renderExploreStack}
          options={{
              tabBarIcon: ({color}) => (<Entypo name="globe" size={26} color={color} />) 
            }} />
      </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  dot: {
    ...Platform.select({
      ios: {
        position: "absolute",
        top: 4,
        right: -2,
      },
      android: {
        position: "absolute",
        right: -1,
        top: 4,
      },
    }),
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 90,
    zIndex: 3
  },
  msesageIcon: {
    flex: 1
  }
});

export default TabNav;