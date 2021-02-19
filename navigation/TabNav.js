import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
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
            tabBarIcon: ({color}) => (<FontAwesome5 name="scroll" size={28} color={color} />),
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

export default TabNav;