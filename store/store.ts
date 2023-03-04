import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './slice/themeSlice';
import testSlice from './testReducer';

export const store = configureStore({
  reducer: {
    test: testSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
