import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class Consent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Consent
        </Text>
      </View>
    );
  }
}

export default Consent;
