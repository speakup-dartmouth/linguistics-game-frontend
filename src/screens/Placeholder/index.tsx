import {
  SafeAreaView, Text,
} from 'react-native';
import styles from './styles';

function PlaceholderScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is placeholder text.</Text>
    </SafeAreaView>
  );
}

export default PlaceholderScreen;
