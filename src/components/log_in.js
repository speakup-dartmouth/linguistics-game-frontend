import React, {
    useContext, useState
  } from 'react';
  import {
    Text, View, TextInput,
  } from 'react-native';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import Spinner from 'react-native-loading-spinner-overlay';
  import { AuthContext } from 'context/AuthContext';
  
  function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, logIn } = useContext(AuthContext);
  
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Spinner visible={isLoading} />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            onChangeText={(e) => {
              setEmail(e);
            }}
            value={email}
            placeholder="EMAIL"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <TextInput
            value={password}
            placeholder="PASSWORD"
            onChangeText={(p) => {
              setPassword(p);
            }}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => {
              logIn(email, password);
            }}
          >
            <Text>LOG IN!</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text> Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Sign Up')}>
              <Text> Sign up! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  export default LogIn;