import React, {
  useState,
} from 'react';
import {
  Text, View, Pressable, Linking, TouchableHighlight
} from 'react-native';
import CheckBox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSignUpMutation } from 'services/api';
import dayjs from 'dayjs';
import { useAppDispatch } from 'redux/hooks';
import { setError } from 'redux/slices/errorSlice';
import Textbox from 'components/UI/Textbox';
import styles from './styles';

function SignUp(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp, { isLoading }] = useSignUpMutation();
  // const [dateOfBirthOpen, setDateOfBirthOpen] = useState(false);
  // const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [over18, setOver18] = useState(false);
  const [agree, setAgree] = useState(false);
  const dispatch = useAppDispatch();

  const disabled = !email || !username || !password || !confirmPassword
    || !over18 || !agree || isLoading;

  return (
    <View style={styles.subview}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subheading}>Create your account today!</Text>
      <Textbox
        value={username}
        placeholder="Username"
        placeholderTextColor='#737B7D'
        onChangeText={(u) => {
          setName(u);
        }}
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
      />
     <View style={styles.checkboxContainer} >
         <CheckBox
          value={over18}
          onValueChange={setOver18}
        />
        <View style={styles.checkboxTextContainer}>
          <Text style={styles.subheading}>
           I am 18 years or older
          </Text>
        </View>
      </View>
      <Textbox
        value={email}
        placeholder="Email"
        placeholderTextColor='#737B7D'
        onChangeText={(e) => {
          setEmail(e);
        }}
        returnKeyType="next"
        blurOnSubmit={false}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Textbox
        value={password}
        placeholder="Password"
        placeholderTextColor='#737B7D'
        onChangeText={(p) => {
          setPassword(p);
        }}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Textbox
        value={confirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor='#737B7D'
        onChangeText={(p) => {
          setConfirmPassword(p);
        }}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.checkboxContainer} >
         <CheckBox
          value={agree}
          onValueChange={setAgree}
        />
        <View style={styles.checkboxTextContainer}>
          <Text style={styles.checkboxLabel}>
            I have read and accept the{' '}
            <TouchableHighlight
              
              onPress={() =>
                Linking.openURL(
                  'https://docs.google.com/document/d/e/2PACX-1vQupXdBR2v-9mViedBKJsPfizik-3FCsZ6WCceiZ7Ra0qHFkEvACIT2bZbhs0hnWO4Wp3tTWUNQLfAQ/pub'
                )
              }
              underlayColor="#f1f1f1"
            >
              <Text style={styles.highlightedText}>Speak Up Community Guidelines</Text>
            </TouchableHighlight>
          </Text>
        </View>
      </View>
  
      <Pressable style={{ ...styles.submitButton, opacity: disabled ? 0.5 : 1 }}
        disabled={disabled}
        onPress={() => {
          if (password !== confirmPassword) {
            dispatch(setError(('Password and confirm password must match.')));
            return;
          }
          if (!agree) {
            dispatch(setError(('Please review and agree to our Community Guidelines')));
            return;
          }
          signUp({
            username, email, password, over18,
          });
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
