import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import styles from './styles';

function LandingScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
    </SafeAreaView>
  );
}

export default LandingScreen;
