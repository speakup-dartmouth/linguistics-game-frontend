import AppNavigator from 'navigation';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import { API_KEY } from 'react-native-dotenv';

axios.defaults.headers.common.API_KEY = API_KEY;

export default function App(): JSX.Element {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
