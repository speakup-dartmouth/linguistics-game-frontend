import {
  View, TouchableHighlight, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
} from 'react-native';
import { useState } from 'react';
import { dimensions } from 'lib/constants';
import styles from './styles';
import LogIn from './login';
import SignUp from './signup';

function RegistrationScreen(): JSX.Element {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const logInProps = {
    activeOpacity: 1,
    // underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isLoggingIn ? styles.toggleButtonActive : styles.toggleButtonInactive, // <-- but you can still apply other style changes
    // onHideUnderlay: () => setIsLoggingIn(false),
    onShowUnderlay: () => setIsLoggingIn(true),
    onPress: () => console.log('login pressed'),
  };

  const signUpProps = {
    activeOpacity: 1,
    // underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isLoggingIn ? styles.toggleButtonInactive : styles.toggleButtonActive, // <-- but you can still apply other style changes
    // onHideUnderlay: () => setIsLoggingIn(true),
    onShowUnderlay: () => setIsLoggingIn(false),
    onPress: () => console.log('signup pressed'),
  };

  return (
    <KeyboardAvoidingView behavior="position"
      style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
      }}
      keyboardVerticalOffset={-(dimensions.height * 0.2)}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableHighlight {...signUpProps}>
              <Text style={isLoggingIn ? styles.textInactive : styles.textActive}>Register</Text>
            </TouchableHighlight>
            <TouchableHighlight {...logInProps}>
              <Text style={isLoggingIn ? styles.textActive : styles.textInactive}>Log In</Text>
            </TouchableHighlight>
          </View>

          {isLoggingIn ? (<LogIn />) : (<SignUp />)}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default RegistrationScreen;
