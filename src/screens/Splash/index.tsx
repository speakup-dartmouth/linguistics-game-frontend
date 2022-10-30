import {
  SafeAreaView,
} from 'react-native';
import Logo from 'assets/logo.svg';
import styles from './styles';

function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
}

export default SplashScreen;
