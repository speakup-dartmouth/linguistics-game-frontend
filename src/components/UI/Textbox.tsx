import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

function Textbox(props: TextInputProps): JSX.Element {
  return (
    <TextInput
      style={styles.textBox}
      {...props}
    />
  );
}

export default Textbox;
