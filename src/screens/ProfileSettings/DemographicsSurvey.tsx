import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { View, Text } from 'react-native';
import { useAppNavigation } from 'navigation/types';
import Demographics from './Demographics';
import Demographics1 from './Demographics1';
import Demographics2 from './Demographics2';
import Demographics3 from './Demographics3';
import Demographics4 from './Demographics4';
import Demographics5 from './Demographics5';
import Demographics6 from './Demographics6';
import styles from './styles';

// Parent component managing the survey flow
function DemographicsSurvey(): JSX.Element {
  const [screen, setScreen] = useState(1);
  const { demographicAttributes } = useAppSelector((state) => state.auth);
  console.log(demographicAttributes);
  const [updateUser] = useUpdateUserMutation();
  const navigation = useAppNavigation();

  function convertToArray(stringLanguages) {
    if (stringLanguages) {
      return stringLanguages.split(', ');
    }
    return [];
  }  

  const [demographicsAnswers, setDemAnswers] = useState({
    gender: demographicAttributes.gender,
    birthYear: demographicAttributes.birthYear,
    race: demographicAttributes.race,
    childState: demographicAttributes.childState,
    childTown: demographicAttributes.childTown,
    childZip: demographicAttributes.childZip,
    childLocale: demographicAttributes.childLocale,
    teenState: demographicAttributes.teenState,
    teenTown: demographicAttributes.teenTown,
    teenZip: demographicAttributes.teenZip,
    teenLocale: demographicAttributes.teenLocale,
    parentState: demographicAttributes.parentState,
    adultTown: demographicAttributes.adultTown,
    adultZip: demographicAttributes.adultZip,
    adultLocale: demographicAttributes.adultLocale,
    educationLevel: demographicAttributes.educationLevel,
    occupation: demographicAttributes.occupation,
    childhoodLanguages: convertToArray(demographicAttributes.childhoodLanguages),
  });
  console.log(demographicsAnswers);

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
        gender: demographicsAnswers.gender,
        birthYear: demographicsAnswers.birthYear,
        race: demographicsAnswers.race,
        childState: demographicsAnswers.childState,
        childTown: demographicsAnswers.childTown,
        childZip: demographicsAnswers.childZip,
        childLocale: demographicsAnswers.childLocale,
        teenState: demographicsAnswers.teenState,
        teenTown: demographicsAnswers.teenTown,
        teenZip: demographicsAnswers.teenZip,
        teenLocale: demographicsAnswers.teenLocale,
        parentState: demographicsAnswers.parentState,
        adultTown: demographicsAnswers.adultTown,
        adultZip: demographicsAnswers.adultZip,
        adultLocale: demographicsAnswers.adultLocale,
        educationLevel: demographicsAnswers.educationLevel,
        occupation: demographicsAnswers.occupation,
        childhoodLanguages: demographicsAnswers.childhoodLanguages.join(', '),
      },
    });
    navigation.navigate('TabNavigator')
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
      case 0:
        return <Demographics
        demographicsAnswers={demographicsAnswers}
        updateDemographics={handleDemUpdate}
        nextScreen={nextScreen}
        prevScreen={prevScreen}
      />;
      
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
        handleDemSubmit={handleDemSubmit}
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