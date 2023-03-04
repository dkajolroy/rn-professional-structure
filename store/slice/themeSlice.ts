import {createSlice} from '@reduxjs/toolkit';
import {Appearance, ColorSchemeName} from 'react-native';
import {dark, light} from '../../constants/theme';

const systemTheme = Appearance.getColorScheme();

type InitType = {
  name: ColorSchemeName;
  COLORS: typeof light;
};

const initialState: InitType = {
  name: systemTheme,
  COLORS: systemTheme === 'light' ? light : dark,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.name === 'light') {
        return {name: 'dark', COLORS: dark};
      } else {
        return {name: 'light', COLORS: light};
      }
    },
  },
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
