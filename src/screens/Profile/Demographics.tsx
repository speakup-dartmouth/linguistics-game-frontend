import Button from 'components/UI/Button';
import YesNo from 'components/UI/YesNo';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';

function Demographics(): JSX.Element {
  const { demographicAttributes, isRegistering } = useAppSelector((state) => state.auth);
  const [isBilingualOrMultilingual, setIsBilingualOrMultilingual] = useState(null);
  const [childhoodLanguage, setChildhoodLanguage] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [updateUser] = useUpdateUserMutation();
  const navigation = useAppNavigation();

  useEffect(() => {
    if (demographicAttributes.isBilingualOrMultilingual === 'true') {
      setIsBilingualOrMultilingual(true);
    } else if (demographicAttributes.isBilingualOrMultilingual === 'false') {
      setIsBilingualOrMultilingual(false);
    }

    if (demographicAttributes.childhoodLanguage) {
      setChildhoodLanguage(demographicAttributes.childhoodLanguage);
    }

    if (demographicAttributes.currentLanguage) {
      setCurrentLanguage(demographicAttributes.currentLanguage);
    }
  }, [demographicAttributes]);

  const onPress = () => {
    updateUser({
      demographicAttributes: {
        isBilingualOrMultilingual,
        childhoodLanguage,
        currentLanguage,
      },
    });
    if (isRegistering) {
      navigation.navigate('Categories');
    } else {
      navigation.navigate('TabNavigator');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={globalStyles.headingTwo}>Do you consider yourself bilingual or multilingual?</Text>
        <YesNo isChecked={isBilingualOrMultilingual} setIsChecked={setIsBilingualOrMultilingual} />

        <View style={{ height: 20 }} />

        <Text style={globalStyles.headingThree}>What languages do you speak?</Text>
        <Textbox
          fullWidth
          placeholder="Childhood Language"
          value={childhoodLanguage}
          onChangeText={(text) => { setChildhoodLanguage(text); }}
          style={{ marginTop: 10 }}
        />
        <Textbox
          fullWidth
          placeholder="Current Language"
          value={currentLanguage}
          onChangeText={(text) => { setCurrentLanguage(text); }}
          style={{ marginTop: 10 }}
        />

        <View style={styles.buttonContainer}>
          <Button onPress={onPress} text="Continue" />
        </View>
      </View>
    </View>
  );
}

export default Demographics;
