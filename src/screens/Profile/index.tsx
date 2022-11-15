import {
  SafeAreaView, Text, TouchableHighlight, Image, View,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { clearToken } from 'services/storage';
import { useAppNavigation } from 'navigation/types';
// import GenericUser from '../assets/generic_user.svg';
import { ImageAssets } from 'assets/imageAssets';
import { colors } from 'lib/constants';
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
      <Image source={ImageAssets.profileImg} style={styles.profileImg} />
      <Text style={styles.welcome}>Welcome, {username}</Text>
      <View style={styles.divider} />
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor={colors.lightBlue}
        onPress={() => navigation.navigate('DemographicsModal')}
      >
        <Text style={styles.buttonText}>Edit Demographics</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor={colors.lightBlue}
        onPress={navigateToConsent}
      >
        <Text style={styles.buttonText}>Adjust Consent</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor={colors.lightBlue}
        onPress={() => navigation.navigate('CategoriesModal')}
      >
        <Text style={styles.buttonText}>Update Interests</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor={colors.lightBlue}
        onPress={signOut}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

export default ProfileScreen;
