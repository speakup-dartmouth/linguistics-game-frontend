import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing } from 'screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator initialRouteName="Landing">
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="About" component={Landing} />
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
