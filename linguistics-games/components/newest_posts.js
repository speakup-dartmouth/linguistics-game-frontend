import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class NewestPosts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodyMedium}>
          Newest Posts
        </Text>
      </View>
    );
  }
}

export default NewestPosts;
