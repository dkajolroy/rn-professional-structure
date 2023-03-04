import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MainNavigation from './navigations/MainNavigation';
import {store} from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
