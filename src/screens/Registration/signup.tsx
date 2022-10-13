import React, {
  useContext, useState,
} from 'react';
import {
  Text, TextInput, View, Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from 'context/AuthContext';
import styles from './styles';

function SignUp(): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useContext(AuthContext);
  const [ageOpen, setAgeOpen] = useState(false);
  const [age, setAge] = useState(null);
  const [ageOptions, setAgeOptions] = useState([
    { label: '19', value: 19 },
    { label: '20', value: 20 },
    { label: '21', value: 21 },
  ]);
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
        placeholder="USERNAME"
        onChangeText={(u) => {
          setName(u);
        }}
        returnKeyType="next"
      />
      <View style={styles.dropdownRow}>
        <DropDownPicker
          open={ageOpen}
          value={age}
          items={ageOptions}
          setOpen={setAgeOpen}
          setValue={setAge}
          setItems={setAgeOptions}
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
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
        />
      </View>
      <TextInput
        style={styles.textBox}
        value={email}
        placeholder="EMAIL"
        onChangeText={(e) => {
          setEmail(e);
        }}
        returnKeyType="next"
        blurOnSubmit={false}
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
      <TextInput
        style={styles.textBox}
        value={password}
        placeholder="CONFIRM PASSWORD"
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
          signUp(username, email, password);
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
