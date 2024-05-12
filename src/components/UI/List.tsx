import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const List = ({ items }) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.listItemText}>({index + 1}) {item}</Text>
          <Text> </Text>
          {/* <Text style={styles.listItemText}>{item}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default List;