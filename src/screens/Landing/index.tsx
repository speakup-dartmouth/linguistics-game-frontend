import Recorder from 'components/Recorder';
import {
  SafeAreaView,
} from 'react-native';
import styles from './styles';

function LandingScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Recorder />
    </SafeAreaView>
  );
}

export default LandingScreen;
