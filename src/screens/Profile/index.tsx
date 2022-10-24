import {
  SafeAreaView, Button,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { clearToken } from 'services/storage';
import { useAppNavigation } from 'navigation/types';
import styles from './styles';

function ProfileScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const signOut = () => {
    dispatch(logout());
    clearToken();
  };

  const navigateToConsent = () => {
    navigation.navigate('ResearchConsentModal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="LOG OUT" onPress={signOut} />
      <Button title="CONSENT" onPress={navigateToConsent} />
      <Button title="DEMOGRAPHICS" onPress={() => navigation.navigate('DemographicsModal')} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
