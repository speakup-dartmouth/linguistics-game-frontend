import { globalStyles } from 'lib/styles';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';

interface DropdownProps {
  text: string;
  options: string[];
  onSelect: (selectedValue: string) => void;
}

const Dropdown = ({ text, options, onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (index: number, value: string) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <View>
      <ModalDropdown options={options} onSelect={handleSelect}>
        <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>{selectedOption || text}</Text>
        </View>
      </ModalDropdown>
    </View>
  );
};

export default Dropdown;
