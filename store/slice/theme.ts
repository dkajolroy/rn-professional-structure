import {createSlice} from '@reduxjs/toolkit';
import {dark, light} from '../../constants/theme';

type InitType = {
  name: 'light' | 'dark';
  theme: typeof light;
};

const initialState: InitType = {
  name: 'light',
  theme: light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.name === 'light') {
        return {name: 'dark', theme: dark};
      } else {
        return {name: 'light', theme: light};
      }
    },
  },
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
