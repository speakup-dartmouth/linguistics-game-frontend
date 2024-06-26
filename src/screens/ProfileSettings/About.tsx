import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { useAppNavigation } from 'navigation/types';
import styles from './styles';

function About(): JSX.Element {
  const navigation = useAppNavigation();

  const onPress = () => {
    navigation.navigate("ProfilePage")
  };

  const email = 'info.speakup.contact@gmail.com';
  const subject = 'Questions or Suggestions';

  const onPressEmail = async () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    try {
      await Linking.openURL(mailtoLink);
    } catch (error) {
      console.error('Failed to open email:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.aboutHeading}>Questions or suggestions?</Text>
        <Text style={styles.aboutSubheading}>Reach us at: </Text>
        <TouchableOpacity onPress={onPressEmail}>
          <Text style={styles.aboutLink}>{email}</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Back" />
        </View>
      </View>
    </View>
  );
}

export default About;
