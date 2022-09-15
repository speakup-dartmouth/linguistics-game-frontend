import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class VoiceRecording extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Voice Recording
        </Text>
      </View>
    );
  }
}

export default VoiceRecording;
