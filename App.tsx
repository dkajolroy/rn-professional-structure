import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}