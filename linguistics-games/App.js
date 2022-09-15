import React from 'react';
import MainTabBar from './navigation/main_tab_bar';
// import AppLoading from 'expo-splash-screen';
import { LogBox, Text } from 'react-native';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

// disable really annoying in app warnings
console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return <MainTabBar />;
};

export default App;