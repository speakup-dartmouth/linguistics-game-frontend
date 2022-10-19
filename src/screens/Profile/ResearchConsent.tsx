import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import styles from './styles';

function ResearchConsent(): JSX.Element {
  const [checked, setChecked] = useState<boolean | null>(true);

  return (
    <View style={styles.container}>
      <View style={styles.consentContainer}>
        <Text style={styles.consentHeading}>Help Aid Linguistics Research</Text>
        <Text style={styles.consentSubheading}>Share voice data with the Dartmouth Linguistics Department.</Text>

        <Text style={styles.consentHeading}>Agree to share voice data:</Text>
        <Text style={styles.consentSubheading}>Data will <Text style={{ fontWeight: '700' }}>only</Text> be seen by the Dartmouth Linguistics Department for linguistics research.</Text>

        <View style={styles.consentBoxes}>
          <CheckBox checked={checked === true} title="Yes" onPress={() => { setChecked((c) => (c ? null : true)); }} />
          <CheckBox checked={checked === false} title="No" onPress={() => { setChecked((c) => (c !== false ? false : null)); }} />
        </View>

        <View style={styles.buttonContainer}>
          <Button text="Continue" />
        </View>
      </View>
    </View>
  );
}

export default ResearchConsent;
