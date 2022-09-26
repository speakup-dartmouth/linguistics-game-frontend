import Recorder from 'components/Recorder';
import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import styles from './styles';

function LandingScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This text is currently a placeholder.</Text>
      <Recorder />
    </SafeAreaView>
  );
}

export default LandingScreen;
