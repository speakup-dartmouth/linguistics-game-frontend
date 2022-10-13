import {
  SafeAreaView, Button,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch } from 'redux/hooks';
import styles from './styles';

function ProfileScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="LOG OUT" onPress={() => { dispatch(logout()); }} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
