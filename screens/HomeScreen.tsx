import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/slice/theme';
import {RootState} from '../store/store';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={{
        backgroundColor: theme.background,
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          fontSize: 30,
          color: theme.text,
        }}>
        HomeScreen
      </Text>
      <Button title="Theme" onPress={() => dispatch(toggleTheme())} />
    </View>
  );
}

// User store theme in stylesheet
// const {theme} = store.getState();
