import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useUpdateConsentMutation } from 'services/api';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from 'navigation/types';
import { useAppSelector } from 'redux/hooks';
import styles from './styles';

function ResearchConsent(): JSX.Element {
  const { isRegistering, researchConsent } = useAppSelector((state) => state.auth);
  const [checked, setChecked] = useState<boolean | null>(isRegistering ? true : researchConsent);
  const [updateConsent] = useUpdateConsentMutation();
  const navigation = useNavigation<NavigationProp>();

  const onPress = () => {
    updateConsent(checked);
    navigation.navigate('TabNavigator');
  };

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
          <Button onPress={onPress} text="Continue" disabled={checked === null} />
        </View>
      </View>
    </View>
  );
}

export default ResearchConsent;
