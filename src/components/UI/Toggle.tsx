import React from 'react';
import {
  View, Text, Pressable,
} from 'react-native';
import styles from './styles';

interface ToggleProps {
  options: string[];
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void;
  disabled?: boolean;
}

function Toggle({
  options, selectedOption, setSelectedOption, disabled,
}: ToggleProps): JSX.Element {
  return (
    <View style={styles.toggleContainer}>
      {options.map((option, i) => (
        <React.Fragment key={option}>
          <Pressable
            style={[styles.toggleButton, selectedOption === option ? { backgroundColor: '#3297C1' } : {}]}
            onPress={() => { setSelectedOption(option); }}
            disabled={disabled}
          >
            <Text style={styles.toggleText}>{option}</Text>
          </Pressable>
          {i < options.length - 1 && !selectedOption && <View style={styles.dividerVertical} />}
        </React.Fragment>
      ))}
    </View>
  );
}

export default Toggle;
