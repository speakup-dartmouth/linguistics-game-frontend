import React from 'react';
import {
  TextInput, TextInputProps, StyleProp, TextStyle,
} from 'react-native';
import styles from './styles';

interface TextboxProps extends TextInputProps {
  fullWidth?: boolean;
  style?: StyleProp<TextStyle>;
}

function Textbox(props: TextboxProps): JSX.Element {
  const style = [];
  style.push(styles.textBox);

  if (props.fullWidth) {
    style.push({ width: '100%' });
  }
  if (props.style) {
    style.push(props.style);
  }

  return (
    <TextInput
      {...props}
      style={style}
    />
  );
}

export default Textbox;
