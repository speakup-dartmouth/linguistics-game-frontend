import YesNo from 'components/UI/YesNo';
import { globalStyles } from 'lib/styles';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Demographics(): JSX.Element {
  const [isBilingualOrMultilingual, setIsBilingualOrMultilingual] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={globalStyles.headingTwo}>Do you consider yourself bilingual or multilingual?</Text>
        <YesNo isChecked={isBilingualOrMultilingual} setIsChecked={setIsBilingualOrMultilingual} />
      </View>
    </View>
  );
}

export default Demographics;
