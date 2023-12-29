import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Demographics from './Demographics';
import Demographics1 from './Demographics1';
import Demographics2 from './Demographics2';
import Demographics3 from './Demographics3';
import Demographics4 from './Demographics4';
import Demographics5 from './Demographics5';

import { useAppSelector } from 'redux/hooks';
import styles from './styles';

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
    childLocale: '',
    teenState: '',
    teenTown: '',
    teenZip: '',
    teenLocale: '',
    parentState: '',
    adultTown: '',
    adultZip: '',
    adultLocale: '',
    parentState: '',
    educationLevel: '',
    occupation: '',
    childhoodLanguages: '',
  });

  const stateAbbreviations = {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Arkansas: 'AR',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    Delaware: 'DE',
    'District of Columbia': 'DC', 
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Iowa: 'IA',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Maine: 'ME',
    Maryland: 'MD',
    Massachusetts: 'MA',
    Michigan: 'MI',
    Minnesota: 'MN',
    Mississippi: 'MS',
    Missouri: 'MO',
    Montana: 'MT',
    Nebraska: 'NE',
    Nevada: 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Vermont: 'VT',
    Virginia: 'VA',
    Washington: 'WA',
  };  

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
        childLocale,
        teenState,
        teenTown,
        teenZip,
        teenLocale,
        parentState,
        adultTown,
        adultZip,
        adultLocale,
        parentState,
        educationLevel,
        occupation,
        childhoodLanguages,
      },
    });
  };

  //////// Navigation ////////
  const nextScreen = () => {
    setScreen(screen + 1);
  };

  const prevScreen = () => {
    setScreen(screen - 1);
  };

  ///////// Render /////////
  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Demographics1
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
      />;
      case 2:
        return <Demographics2
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        stateAbbreviations={stateAbbreviations}
      />;
      case 3:
        return <Demographics3
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        stateAbbreviations={stateAbbreviations}
      />;
      case 4:
        return <Demographics4
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        stateAbbreviations={stateAbbreviations}
      />;
      case 5:
        return <Demographics5
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        stateAbbreviations={stateAbbreviations}
      />;
      case 6:
        return <Demographics6
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
        stateAbbreviations={stateAbbreviations}
      />;
      default:
        return <Text>No more screens</Text>;
    }
  };


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

export default DemographicsSurvey;