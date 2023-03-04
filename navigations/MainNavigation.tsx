import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';

export default function MainNavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.home} component={HomeScreen} />
        <Stack.Screen name={ROUTES.profile} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
