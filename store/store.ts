import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './slice/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export const {COLORS} = store.getState().theme;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
