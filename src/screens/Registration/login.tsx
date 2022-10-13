import React, {
  useContext, useState,
} from 'react';
import {
  Text, View, TextInput, Pressable,
} from 'react-native';
import { AuthContext } from 'context/AuthContext';
import styles from './styles';

function LogIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useContext(AuthContext);

  return (
    <View style={styles.subview}>
      <Text style={styles.heading}>Log In</Text>
      <Text style={styles.subheading}>Welcome back. Please log in to your account.</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(e) => {
          setEmail(e);
        }}
        value={email}
        placeholder="EMAIL"
        returnKeyType="next"
      />
      <TextInput
        style={styles.textBox}
        value={password}
        placeholder="PASSWORD"
        onChangeText={(p) => {
          setPassword(p);
        }}
        secureTextEntry
      />
      <Pressable
        style={styles.submitButton}
        onPress={() => {
          logIn(email, password);
        }}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
}

export default LogIn;
