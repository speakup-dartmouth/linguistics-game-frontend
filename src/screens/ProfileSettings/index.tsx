import {
  SafeAreaView, Text, TouchableHighlight, View, Image, SectionList, Pressable, FlatList, TouchableOpacity,
} from 'react-native';
import { logout } from 'redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { clearToken } from 'services/storage';
import { useAppNavigation } from 'navigation/types';
// import GenericUser from '../assets/generic_user.svg';
import { ImageAssets } from 'assets/imageAssets';
// import User from 'assets/user.svg';
import { colors } from 'lib/constants';
import styles from './styles';
import 'assets/profile.webp';
import { Entypo } from '@expo/vector-icons'; 

function ProfileScreen(): JSX.Element {
  const { username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  // data: ['Account', 'Demographics', 'Linguistic Research Consent', 'Preferences', 'Logout'],
  // const DATA = [
  //   {
  //     nav: 'DemographicsModal',
  //     data: ['Demographics'],
  //   },
  //   {
  //     nav: 'ResearchConsentModal',
  //     data: ['Linguistic Research Consent'],
  //   },
  //   {
  //     nav: 'CategoriesModal',
  //     data: ['Preferences'],
  //   }
  // ];

  const signOut = () => {
    dispatch(logout());
    clearToken();
  };
  
  const DATA = [
    { id: '0', nav: '', data: 'Account', onPress: null },
    { id: '1', nav: 'DemographicsModal', data: 'Demographics' },
    { id: '2', nav: 'ResearchConsentModal', data: 'Linguistic Research Consent'},
    { id: '3', nav: 'CategoriesModal', data: 'Preferences' },
    { id: '4', nav: '', data: 'Log Out', onPress: signOut },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <Image source={ImageAssets.userImg} style={styles.profileImg} />
      <Text style={styles.welcome}>Welcome, {username}</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity >
          <Text style={styles.tabText}>Stats</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity>
          <Text style={styles.tabText}>Achievements</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity >
          <Text style={styles.tabTextSelected}>Settings</Text>
        </TouchableOpacity>
      </View>
      <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity 
              onPress={() => item.onPress ? item.onPress() : navigation.navigate(item.nav)}
              style={[styles.itemContainer, index !== DATA.length - 1 && styles.itemWithIcon]}>
                <Text style={[styles.profileItem, item.data === 'Log Out' && styles.logoutText]}>
                  {item.data}
                </Text>
                {index !== DATA.length - 1 && <Entypo name="chevron-thin-right" size={24} color="black" />}
            </TouchableOpacity>
          )}
      >
      </FlatList>
    </SafeAreaView>
  );
}

export default ProfileScreen;
