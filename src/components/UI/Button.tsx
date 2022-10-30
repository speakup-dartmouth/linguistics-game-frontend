import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

function Button({ text, onPress, disabled }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={{ ...styles.buttonContainer, opacity: disabled ? 0.7 : 1 }} disabled={disabled} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
