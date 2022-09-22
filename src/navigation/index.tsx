/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing } from 'screens';
import { colors } from 'lib/constants';
import Compass from 'assets/compass.svg';
import Profile from 'assets/profile.svg';
import Search from 'assets/search.svg';
import Upvote from 'assets/upvote.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  const CompassIcon = useCallback(() => <Compass width={24} height={24} />, []);
  const ProfileIcon = useCallback(() => <Profile width={24} height={24} />, []);
  const SearchIcon = useCallback(() => <Search width={24} height={24} />, []);
  const UpvoteIcon = useCallback(() => <Upvote width={24} height={24} />, []);

  return (
    <Tab.Navigator
      initialRouteName="Landing"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: colors.lightBlue,
        tabBarInactiveBackgroundColor: colors.darkBlue,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen name="Landing" component={Landing} options={{ tabBarIcon: () => (<CompassIcon />) }} />
      <Tab.Screen name="Upvote" component={Landing} options={{ tabBarIcon: () => (<UpvoteIcon />) }} />
      <Tab.Screen name="Search" component={Landing} options={{ tabBarIcon: () => (<SearchIcon />) }} />
      <Tab.Screen name="Profile" component={Landing} options={{ tabBarIcon: () => (<ProfileIcon />) }} />
    </Tab.Navigator>
  );
}

function Navigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
