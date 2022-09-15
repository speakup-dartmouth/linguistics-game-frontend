import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Profile
        </Text>
      </View>
    );
  }
}

export default Profile;
