import AppNavigator from 'navigation';
import { StatusBar } from 'expo-status-bar';

export default function App(): JSX.Element {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
