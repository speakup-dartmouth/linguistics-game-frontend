import { globalStyles } from 'lib/styles';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';

interface DropdownProps {
  text: string;
  options: string[];
  onSelect: (selectedValue: string) => void;
  currentValue: string | null; // Add a prop to handle the current value
}

const Dropdown = ({ text, options, onSelect, currentValue }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(currentValue);

  useEffect(() => {
    setSelectedOption(currentValue);
  }, [currentValue]);

  const handleSelect = (index: number, value: string) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <View>
      <ModalDropdown options={options} defaultIndex={0} onSelect={handleSelect}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedOption || text}</Text>
        </View>
      </ModalDropdown>
    </View>
  );
};

export default Dropdown;
