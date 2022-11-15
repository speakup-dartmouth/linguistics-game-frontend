import {
  SafeAreaView, Button, Text, TouchableHighlight,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { clearToken } from 'services/storage';
import { useAppNavigation } from 'navigation/types';
import styles from './styles';

function ProfileScreen(): JSX.Element {
  const { username } = useAppSelector((state) => state.auth);
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
      <Text>Welcome, {username}</Text>
      <TouchableHighlight
        style={styles.editButton}
        activeOpacity={0.7}
        underlayColor="#30aaff"
        onPress={() => navigation.navigate('DemographicsModal')}
      >
        <Text style={styles.editButtonText}>Edit Demographics</Text>
      </TouchableHighlight>
      <Button title="CONSENT" onPress={navigateToConsent} />
      <Button title="DEMOGRAPHICS" onPress={() => navigation.navigate('DemographicsModal')} />
      <Button title="CATEGORIES" onPress={() => navigation.navigate('CategoriesModal')} />
      <Button title="LOG OUT" onPress={signOut} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
