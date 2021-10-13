import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeView from "./views/Home.js";
import CounterView from "./views/Counter.js";
import ComparatorView from "./views/Comparator.js";
import TrendView from "./views/Trend.js";

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
          component={ComparatorView} 
          options={{
            tabBarLabel: 'Comparator',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="scale-balance" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Trend" 
          component={TrendView}
          options={{
            tabBarLabel: 'Trend',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="trending-up" color={color} size={26} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
