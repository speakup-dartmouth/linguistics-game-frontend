import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        <Text style={styles.bodyMedium}>
          The bare bones of this app were created following the CS52 React Native ECSA!
        </Text>
      </View>
    );
  }
}

export default About;
