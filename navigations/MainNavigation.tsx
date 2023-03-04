import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {toggleTheme} from '../store/slice/themeSlice';
import {RootState} from '../store/store';

export default function MainNavigation() {
  const Stack = createStackNavigator();
  const {COLORS} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: COLORS.black,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerRight: () => {
            return (
              <Button onPress={() => dispatch(toggleTheme())} title="Theme" />
            );
          },
        }}>
        <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
        <Stack.Screen name={ROUTES.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
