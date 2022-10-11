import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import LogIn from 'components/log_in';
import SignUp from 'components/sign_up';
import LoadingPage from 'components/loading';
import AppNavigator from 'navigation';

const Stack = createStackNavigator();

function EntryStack() {
  const { userInfo, splashLoading } = useContext(AuthContext);
  if(userInfo.token) {
    return <AppNavigator />;
  }
  return (
    <NavigationContainer>
      {splashLoading ? (
        <Stack.Navigator>
          <Stack.Screen name="LoadingPage" component={LoadingPage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Log In" component={LogIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default EntryStack;