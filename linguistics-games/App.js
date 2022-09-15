import React from 'react';
import MainTabBar from './navigation/main_tab_bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

// disable really annoying in app warnings
console.disableYellowBox = true;

const App = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return <MainTabBar />;
  }
};


export default App;