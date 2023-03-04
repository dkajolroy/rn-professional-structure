import React from 'react';
import 'react-native-gesture-handler';
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
