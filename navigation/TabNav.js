import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MessagingNavigation from './MessagingNavigation';
import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from '../screens/HomeScreen';

const TabNav = () => {

  const Tabs = createBottomTabNavigator();

  return (
      <Tabs.Navigator tabBarOptions={{activeBackgroundColor: "#DDE2E4", inactiveBackgroundColor: "#161616", activeTintColor: "#161616", inactiveTintColor: "#DDE2E4", showLabel: false}}>
        <Tabs.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({color}) => (<FontAwesome name="home" size={28} color={color} />),
          }}
          />
        {/* <Tabs.Screen 
          name="Projects" 
          component={Add}
          options={{
            tabBarIcon: ({color}) => (<FontAwesome5 name="helicopter" size={22} color={color}/>)
          }} />
        <Tabs.Screen 
          name="Messages" 
          component={MessagingNavigation}
          options={unreadMessages.length > 0 ? {
            tabBarIcon: ({color}) => (
              <View>
                <View style={styles.dot}>
                  <Text />
                </View>
                <Entypo name="message" size={30} color={color} resizeMode="contain" style={styles.messageIcon}/>
              </View>  ) } : {
              tabBarIcon: ({color}) => (<Entypo name="message" size={30} color={color} />) } }
        /> */}
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