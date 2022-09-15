import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class Leaderboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Leaderboard
        </Text>
      </View>
    );
  }
}

export default Leaderboard;
