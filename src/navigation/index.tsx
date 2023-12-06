import React, {
  useCallback, useEffect,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Landing, ProfilePage, Registration, Splash, /*SearchPage,*/ SuggestPage, ResearchConsent, Demographics, Demographics1, DemographicsSurvey, Categories, QuestionDetail, Leaderboard,
} from 'screens';
import { colors } from 'lib/constants';
import Compass from 'assets/compass.svg';
import Profile from 'assets/profile.svg';
//import Search from 'assets/search.svg';
import Suggest from 'assets/suggest.svg';
import Upvote from 'assets/upvote.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { storeToken } from 'services/storage';
import { retrieveToken } from 'redux/slices/authSlice';
import { clearError } from 'redux/slices/errorSlice';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LandingStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LandingScreen" component={Landing} />
      <Stack.Screen name="QuestionDetail" component={QuestionDetail} />
    </Stack.Navigator>
  );
}

function TabNavigator(): JSX.Element {
  const CompassIcon = useCallback(() => <Compass width={24} height={24} />, []);
  const ProfileIcon = useCallback(() => <Profile width={24} height={24} />, []);
  //const SearchIcon = useCallback(() => <Search width={24} height={24} />, []);
  const SuggestIcon = useCallback(() => <Suggest width={30} height={30} />, []);
  const UpvoteIcon = useCallback(() => <Upvote width={24} height={24} />, []);

  return (
    <Tab.Navigator
      initialRouteName="Landing"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveBackgroundColor: colors.lightBlue,
        tabBarInactiveBackgroundColor: colors.darkBlue,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarLabelStyle: {
          marginBottom: 3,
        },
        tabBarIconStyle: {
          marginTop: 3,
        },
        tabBarStyle: {
          backgroundColor: colors.darkBlue,
        },
      }}
    >
      <Tab.Screen name="Landing" component={LandingStackNavigator} options={{ tabBarIcon: CompassIcon, tabBarLabel: 'Discover' }} />
      <Tab.Screen name="Upvote" component={Leaderboard} options={{ tabBarIcon: UpvoteIcon, tabBarLabel: 'Leaderboard' }} />
      {/* <Tab.Screen name="Search" component={SearchPage} options={{ tabBarIcon: SearchIcon, tabBarLabel: 'Search' }} /> */}      
      <Tab.Screen name="Suggest" component={SuggestPage} options={{ tabBarIcon: SuggestIcon, tabBarLabel: 'Suggest' }} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{ tabBarIcon: ProfileIcon, tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}

function MainStackNavigator(): JSX.Element {
  const { isRegistering } = useAppSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isRegistering ? 'ResearchConsent' : 'TabNavigator'}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ResearchConsent" component={ResearchConsent} />
      <Stack.Screen name="Demographics" component={DemographicsSurvey} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}

function StackModalNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Stack.Screen name="ResearchConsentModal" component={ResearchConsent} />
      <Stack.Screen name="DemographicsModal" component={DemographicsSurvey} />
      <Stack.Screen name="CategoriesModal" component={Categories} />
    </Stack.Navigator>
  );
}

function Navigator(): JSX.Element {
  const { authenticated, token, loaded } = useAppSelector((state) => state.auth);
  const { message, isError } = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  // When a new token is generated, store it in async storage
  useEffect(() => {
    if (token) {
      console.log(token);
      storeToken(token);
    }
  }, [token]);

  // When the app loads, check if there is a token stored in async storage
  useEffect(() => {
    dispatch(retrieveToken());
  }, [authenticated]);

  useEffect(() => {
    if (isError && message) {
      // eslint-disable-next-line no-alert
      alert(message);
      dispatch(clearError());
    }
  }, [isError, message]);

  if (!loaded) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loaded && (authenticated ? (
          <Stack.Screen name="Home" component={StackModalNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
