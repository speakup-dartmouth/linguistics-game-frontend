import React, {
  useState,
} from 'react';
import {
  Text, View, Pressable,
} from 'react-native';
import Textbox from 'components/UI/Textbox';
import { useSignInMutation } from 'services/api';
import styles from './styles';

function LogIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, { isLoading }] = useSignInMutation();

  const disabled = email === '' || password === '' || isLoading;

  return (
    <View style={styles.subview}>
      <Text style={styles.heading}>Log In</Text>
      <Text style={styles.subheading}>Welcome back. Please log in to your account.</Text>
      <Textbox
        onChangeText={(e) => {
          setEmail(e);
        }}
        value={email}
        placeholder="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor='#737B7D'
      />
      <Textbox
        value={password}
        placeholder="Password"        
        placeholderTextColor='#737B7D'
        onChangeText={(p) => {
          setPassword(p);
        }}
        secureTextEntry
      />
      <Pressable
        style={{ ...styles.submitButton, opacity: disabled ? 0.5 : 1 }}
        disabled={disabled}
        onPress={() => {
          logIn({ email, password });
        }}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
}

export default LogIn;
