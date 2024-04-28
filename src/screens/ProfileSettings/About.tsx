import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useAppNavigation } from 'navigation/types';
import styles from './styles';

function About(): JSX.Element {
  const navigation = useAppNavigation();

  const onPress = () => {
    navigation.navigate("ProfilePage")
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.aboutHeading}>Questions or suggestions?</Text>
        <Text style={styles.aboutSubheading}>Reach us at: info.speakup.contact@gmail.com </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Back" />
        </View>
      </View>
    </View>
  );
}

export default About;
