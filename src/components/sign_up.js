import React, {
    useContext, useState
  } from 'react';
  import {
    Text, TextInput, View, TouchableOpacity,
  } from 'react-native';
  import Spinner from 'react-native-loading-spinner-overlay';
  import { AuthContext } from 'context/AuthContext';
  
  function SignUp(props) {
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, signUp } = useContext(AuthContext);
  
    return (
      <View>
        <Spinner visible={isLoading} />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            value={email}
            placeholder="EMAIL"
            onChangeText={(e) => {
              setEmail(e);
            }}
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <TextInput
            value={username}
            placeholder="USERNAME"
            onChangeText={(u) => {
              setName(u);
            }}
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
              signUp(username, email, password);
            }}
          >
            <Text>SIGN UP!</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text> Already have an account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Log In')}>
              <Text> Log in! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  export default SignUp;