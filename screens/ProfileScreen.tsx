import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FONTS} from '../constants/theme';
import {RootState} from '../store/store';

export default function ProfileScreen() {
  const {COLORS} = useSelector((state: RootState) => state.theme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text
        style={{
          ...FONTS.h1,
          color: COLORS.black,
        }}>
        ProfileScreen
      </Text>
    </View>
  );
}
