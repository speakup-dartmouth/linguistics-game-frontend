import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Demographics from './Demographics';
import Demographics1 from './Demographics1';
import { useAppSelector } from 'redux/hooks';
import styles from './styles';

console.log("begin DemographicsSurvey.tsx");

// Parent component managing the survey flow
function DemographicsSurvey(): JSX.Element {
  const [screen, setScreen] = useState(1);
  const [demographicsAnswers, setDemAnswers] = useState({
    gender: '',
    birthYear: '',
    race: '',
    childState: '',
    childTown: '',
    childZip: '',
    childLocation: '',
    teenState: '',
    teenTown: '',
    teenZip: '',
    teenLocation: '',
    adultState: '',
    adultTown: '',
    adultZip: '',
    adultLocation: '',
    parentState: '',
    educationLevel: '',
    occupation: '',
    childhoodLanguages: '',
  });

  const handleDemUpdate = (updatedAnswers) => {
    setDemAnswers({ ...demographicsAnswers, ...updatedAnswers });
  };

  const handleDemSubmit = () => {
    updateUser({
      demographicAttributes: {
        gender,
        birthYear,
        race,
        childState,
        childTown,
        childZip,
        childLocation,
        teenState,
        teenTown,
        teenZip,
        teenLocation,
        adultState,
        adultTown,
        adultZip,
        adultLocation,
        parentState,
        educationLevel,
        occupation,
        childhoodLanguages,
      },
    });
  };

  const nextScreen = () => {
    setScreen(screen + 1);
  };

  const prevScreen = () => {
    setScreen(screen - 1);
  };

  // Render different screens
  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Demographics
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        // navigation={navigation} // Pass navigation prop to child screens
      />;
      case 2:
        return <Demographics1
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        // navigation={navigation} // Pass navigation prop to child screens
        nextScreen={nextScreen}
        prevScreen={prevScreen}
      />;
      // Add more cases for additional survey screens
      default:
        return <Text>No more screens</Text>;
    }
  };


  // Pass down the survey state and update function to each screen
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View>
          {renderScreen()}
        </View>
    </View>
  </View>
  );
}

console.log("end DemographicsSurvey.tsx");


export default DemographicsSurvey;