import EntryStack from 'navigation/entry';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from 'context/AuthContext';

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
));

export default function App(): JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <EntryStack />
        <StatusBar style="auto" />
      </Provider>
    </AuthProvider>
  );
}