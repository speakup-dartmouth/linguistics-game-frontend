import React, {
  useState,
} from 'react';
import {
  CheckBox, Text, View, Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
  const [dateOfBirthOpen, setDateOfBirthOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderOptions, setGenderOptions] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Nonbinary', value: 'nonbinary' },
    { label: 'Other', value: 'other' },
  ]);
  const [agree, setAgree] = useState(false);
  const dispatch = useAppDispatch();

  const disabled = !email || !username || !password || !confirmPassword
    || !dateOfBirth || !gender || isLoading;

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
      <View style={styles.dropdownRow}>
        <Pressable style={styles.dateOfBirth} onPress={() => { setDateOfBirthOpen(true); }}>
          <Text style={styles.dropdownText}>{dateOfBirth ? dayjs(dateOfBirth).format('MM/DD/YYYY') : 'Date of Birth'}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={dateOfBirthOpen}
          mode="date"
          onConfirm={(date) => {
            setDateOfBirth(date);
            setDateOfBirthOpen(false);
          }}
          onCancel={() => {
            setDateOfBirthOpen(false);
          }}
        />
        <DropDownPicker
          open={genderOpen}
          value={gender}
          items={genderOptions}
          setOpen={setGenderOpen}
          setValue={setGender}
          setItems={setGenderOptions}
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          placeholder="Gender"
          textStyle={styles.dropdownText}
        />
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
        <Text style={styles.checkboxLabel}>Do you like React Native?</Text>
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
            username, email, password, gender, birthday: dateOfBirth,
          });
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
