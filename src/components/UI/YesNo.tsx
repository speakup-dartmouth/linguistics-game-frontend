import { CheckBox } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface YesNoProps {
  isChecked: boolean | null;
  setIsChecked: (isChecked: boolean | null) => void;
}

function YesNo({ isChecked, setIsChecked }: YesNoProps): JSX.Element {
  return (
    <View style={styles.checkboxes}>
      <CheckBox checked={isChecked === true} title="Yes" onPress={() => { setIsChecked(isChecked ? null : true); }} />
      <CheckBox checked={isChecked === false} title="No" onPress={() => { setIsChecked(isChecked !== false ? false : null); }} />
    </View>
  );
}

export default YesNo;
