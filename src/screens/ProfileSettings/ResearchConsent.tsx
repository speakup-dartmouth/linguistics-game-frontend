import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useUpdateConsentMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import { useAppSelector } from 'redux/hooks';
import YesNo from 'components/UI/YesNo';
import styles from './styles';

function ResearchConsent(): JSX.Element {
  const { isRegistering, researchConsent } = useAppSelector((state) => state.auth);
  const [checked, setChecked] = useState<boolean | null>(isRegistering ? true : researchConsent);
  console.log(researchConsent);
  const [updateConsent] = useUpdateConsentMutation();
  const navigation = useAppNavigation();

  const onPress = () => {
    updateConsent(checked);

    if (isRegistering) {
      navigation.navigate('Demographics');
    } else {
      navigation.navigate('TabNavigator');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.consentHeading}>Help Aid Linguistics Research</Text>
        <Text style={styles.consentSubheading}>Share voice data with the Dartmouth Linguistics Department.</Text>

        <Text style={styles.consentHeading}>Agree to share voice data:</Text>
        <Text style={styles.consentSubheading}>Data will <Text style={{ fontWeight: '700' }}>only</Text> be seen by the Dartmouth Linguistics Department for linguistics research.</Text>

        <YesNo isChecked={checked} setIsChecked={setChecked} />

        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Continue" disabled={checked === null} />
        </View>
      </View>
    </View>
  );
}

export default ResearchConsent;
