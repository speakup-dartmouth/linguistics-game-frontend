import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Register
        </Text>
      </View>
    );
  }
}

export default Register;
