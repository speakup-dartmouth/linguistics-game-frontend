import React from 'react';
import { Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Home from '../components/home';
import styles, { DARK_BLUE, OFF_WHITE } from '../styles';
import NewestPosts from '../components/newest_posts';
import Leaderboard from '../components/leaderboard';
import Profile from '../components/profile';

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

          }
          
          )}
        >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),
            headerTitle: (props) => ( // App Logo
                <Image
                    style={{ width: 200, height: 50 }}
                    source={require('../assets/defend_your_stance_header.png')}
                    resizeMode='contain'
                />
            ),
            headerTitleStyle: { flex: 1, textAlign: 'center', },
            }}
          />
          <Tab.Screen name="Newest Posts" component={NewestPosts} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="vote-yea" size={size} color={color} />
            ),
            headerTitle: (props) => ( // App Logo
                <Image
                    style={{ width: 200, height: 50 }}
                    source={require('../assets/defend_your_stance_header.png')}
                    resizeMode='contain'
                />
            ),
            headerTitleStyle: { flex: 1, textAlign: 'center', },
            }}
           />
           <Tab.Screen name="Leaderboard" component={Leaderboard} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="user-shield" size={size} color={color} />
            ),
            headerTitle: (props) => ( // App Logo
                <Image
                    style={{ width: 200, height: 50 }}
                    source={require('../assets/defend_your_stance_header.png')}
                    resizeMode='contain'
                />
            ),
            headerTitleStyle: { flex: 1, textAlign: 'center', },
            }}
           />
           <Tab.Screen name="Profile" component={Profile} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="user" size={size} color={color} />
            ),
            headerTitle: (props) => ( // App Logo
                <Image
                    style={{ width: 200, height: 50 }}
                    source={require('../assets/defend_your_stance_header.png')}
                    resizeMode='contain'
                />
            ),
            headerTitleStyle: { flex: 1, textAlign: 'center', },
            }}
           />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  

export default MainTabBar;