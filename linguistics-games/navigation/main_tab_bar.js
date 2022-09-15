import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../components/home';
import About from '../components/about';
import styles, { DARK_BLUE, OFF_WHITE } from '../styles';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: OFF_WHITE,
            tabBarInactiveTintColor: '#dbdbdb',

            tabBarStyle: {
                backgroundColor: DARK_BLUE
            }

          })}
        >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),}}
          />
          <Tab.Screen name="About" component={About} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="info-circle" size={size} color={color} />
            ),}}
           />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  

export default MainTabBar;