import {
  SafeAreaView, Button,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { clearToken } from 'services/storage';
import styles from './styles';

function ProfileScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(logout());
    clearToken();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="LOG OUT" onPress={signOut} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
