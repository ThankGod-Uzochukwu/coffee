import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'
import ScanPay from './scanpay';
import Order from './order';
import Gift from './gift';
import Rewards from './rewards';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />

      <Tab.Screen 
        name="Scan" 
        component={ScanPay} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={24} color="black" />
          ),
        }} />

      <Tab.Screen 
        name="Order" 
        component={Order} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }} />
      <Tab.Screen 
        name="Gift" 
        component={Gift} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="gift" size={24} color="black" />
          ),
        }} />
      <Tab.Screen 
        name="Rewards" 
        component={Rewards} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="staro" size={24} color="black" />
          ),
        }} />
    </Tab.Navigator>

  );
};

export default AppNavigator;
