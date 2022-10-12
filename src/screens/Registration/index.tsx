import {
    SafeAreaView, View, TouchableHighlight, Text
  } from 'react-native';
import styles from './styles';
import LogIn from './login';
import SignUp from './signup';
import { useState } from 'react';
  
function RegistrationScreen(): JSX.Element {
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    var logInProps = {
        activeOpacity: 1,
        // underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isLoggingIn ? styles.toggleButtonActive : styles.toggleButtonInactive, // <-- but you can still apply other style changes
        // onHideUnderlay: () => setIsLoggingIn(false),
        onShowUnderlay: () => setIsLoggingIn(true),
        onPress: () => console.log('login pressed'),
    };
    var signUpProps = {
    activeOpacity: 1,
    // underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isLoggingIn ? styles.toggleButtonInactive : styles.toggleButtonActive, // <-- but you can still apply other style changes
    // onHideUnderlay: () => setIsLoggingIn(true),
    onShowUnderlay: () => setIsLoggingIn(false),
    onPress: () => console.log('signup pressed'),
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TouchableHighlight {...logInProps}>
                    <Text>Log In</Text>
                </TouchableHighlight>
                <TouchableHighlight {...signUpProps}>
                    <Text>Sign Up</Text>
                </TouchableHighlight>
            </View>
            {isLoggingIn ? (< LogIn />) : (<SignUp />)}
      </SafeAreaView>
    );
}
  
export default RegistrationScreen;
  