import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity, TextInput } from 'react-native';
import { useAppNavigation } from 'navigation/types';
import { useAppSelector } from 'redux/hooks';
import styles from './styles';

function Account(): JSX.Element {
  const navigation = useAppNavigation();
  const { username } = useAppSelector((state) => state.auth);
  const { id } = useAppSelector((state) => state.auth);
  const { email } = useAppSelector((state) => state.auth);

  const [inputText, setInputText] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const onPress = () => {
    navigation.navigate("ProfilePage")
  };

  const onPressDelete = async () => {
    
  };

   // Function to handle the input text change
   const handleInputChange = (text) => {
    setInputText(text);
    // Enable button if the text matches the required phrase
    if (text === 'I want to delete my account') {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.aboutHeading}>Are you sure you want to delete your account?</Text>
        <Text style={styles.aboutSubheading}>All of your data will be deleted. This action cannot be undone.</Text>
          <Text style={styles.prompt}>
            Please type "I want to delete my account" to confirm deletion:
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            value={inputText}
            onChangeText={handleInputChange}
            autoCapitalize="none"
          />
          <View styles = {styles.buttonContainer}>
            <Button
              text="Delete My Account"
              onPress={onPressDelete}
              disabled={!isButtonEnabled}
              color={isButtonEnabled ? 'red' : 'grey'}
            />
          </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Back" />
        </View>
      </View>
    </View>
  );
}

export default Account;
