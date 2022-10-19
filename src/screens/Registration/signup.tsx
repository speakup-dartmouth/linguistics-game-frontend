import React, {
  useState,
} from 'react';
import {
  Text, TextInput, View, Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSignUpMutation } from 'services/api';
import dayjs from 'dayjs';
import styles from './styles';

function SignUp(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp] = useSignUpMutation();
  const [dateOfBirthOpen, setDateOfBirthOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderOptions, setGenderOptions] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Nonbinary', value: 'Nonbinary' },
    { label: 'Other', value: 'Other' },
  ]);

  return (
    <View style={styles.subview}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subheading}>Create your account today!</Text>
      <TextInput
        style={styles.textBox}
        value={username}
        placeholder="Username"
        onChangeText={(u) => {
          setName(u);
        }}
        returnKeyType="next"
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
      <TextInput
        style={styles.textBox}
        value={email}
        placeholder="Email"
        onChangeText={(e) => {
          setEmail(e);
        }}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.textBox}
        value={password}
        placeholder="Password"
        onChangeText={(p) => {
          setPassword(p);
        }}
        secureTextEntry
      />
      <TextInput
        style={styles.textBox}
        value={confirmPassword}
        placeholder="Confirm Password"
        onChangeText={(p) => {
          setConfirmPassword(p);
        }}
        secureTextEntry
      />
      <Pressable style={styles.submitButton}
        onPress={() => {
          if (password !== confirmPassword) {
            console.log('password and confirm password must match.');
            return;
          }
          signUp({ username, email, password });
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
