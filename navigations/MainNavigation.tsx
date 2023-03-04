import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function MainNavigation() {
  const Stack = createStackNavigator();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
        <Stack.Screen name={ROUTES.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
