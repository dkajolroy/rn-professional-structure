import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FONTS} from '../constants/theme';
import {Props} from '../interface/NavInterface';
import {toggleTheme} from '../store/slice/themeSlice';
import {RootState} from '../store/store';

export default function HomeScreen({route, navigation}: Props) {
  const dispatch = useDispatch();
  const {COLORS} = useSelector((state: RootState) => state.theme);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          ...FONTS.largeTitle,
          color: COLORS.black,
        }}>
        HomeScreen
      </Text>
      <Button title="Theme" onPress={() => dispatch(toggleTheme())} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
