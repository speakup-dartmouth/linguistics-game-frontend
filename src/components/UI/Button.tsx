import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Button({ text }: {text: string}): JSX.Element {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
