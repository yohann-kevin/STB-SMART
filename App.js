import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeView from "./views/Home.js";
import CounterView from "./views/Counter.js";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#fff"
        inactiveColor="#a8a8a4"
        barStyle={{ backgroundColor: '#8d39fa' }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeView}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Comparator"
          component={CounterView} 
          options={{
            tabBarLabel: 'Comparator',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="scale-balance" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Counter" 
          component={CounterView}
          options={{
            tabBarLabel: 'Counter',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="counter" color={color} size={26} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
