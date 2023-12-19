import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './screen';




const Coffee = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Coffee;
