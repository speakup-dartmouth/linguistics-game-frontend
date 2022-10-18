import axios from 'axios';
// @ts-ignore
import { API_KEY } from 'react-native-dotenv';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigator from 'navigation';
import { store } from 'redux/store';

axios.defaults.headers.common.API_KEY = API_KEY;

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
