import {
  SafeAreaView, Button
} from 'react-native';
import styles from './styles';
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

function ProfileScreen(): JSX.Element {
    const { logOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="LOG OUT" onPress={() => {logOut();}} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
