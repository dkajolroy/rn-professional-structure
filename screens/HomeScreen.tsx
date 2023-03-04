import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/slice/themeSlice';
import {RootState} from '../store/store';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const {COLORS} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          fontSize: 30,
          color: COLORS.white,
        }}>
        HomeScreen
      </Text>
      <Button title="Theme" onPress={() => dispatch(toggleTheme())} />
    </View>
  );
}
