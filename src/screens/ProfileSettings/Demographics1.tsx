import Button from 'components/UI/Button';
import Pill from 'components/UI/Pill';
import Dropdown from 'components/UI/Dropdown';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';

function Demographics1({ demographicsAnswers, updateDemographics, nextScreen, prevScreen }): JSX.Element {
  const genders = ['female', 'male', 'non-binary', 'other'];
  const years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'];
  const races = ['White', 'Black or African American', 'American Indian or Alaska Native', 'Asian', 'Hispanic', 'Native Hawaiian or Other Pacific Islander'];

  const handleNext = () => {
    nextScreen();
  };
  const handleBack = () => {
    prevScreen();
  };

  const handleGender = (selectedGender) => {
    const currentGender = demographicsAnswers.gender;
    if (selectedGender === currentGender) {
      updateDemographics({ gender: null });
    } else {
      updateDemographics({ gender: selectedGender });
    }
  };
  
  const handleRace = (selectedRace) => {
    const currentRace = demographicsAnswers.race;
    if (selectedRace === currentRace) {
      updateDemographics({ race: null });
    } else {
      updateDemographics({ race: selectedRace });
    }
  };

  const handleBirthYear = (selectedBirthYear) => {
    const currentBirthYear = demographicsAnswers.birthYear;
    if (selectedBirthYear === currentBirthYear) {
      updateDemographics({ birthYear: null });
    } else {
      updateDemographics({ birthYear: selectedBirthYear });
    }
  };  

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={globalStyles.headingOne}>Demographics</Text>
        <View style={styles.pillGroup}>
          <Text style={globalStyles.headingThree}>What is your gender?</Text>
          <View style={styles.pillGroup}>
            {genders.map((pill) => (
              <Pill key={pill} pill={pill} onPress={() => handleGender(pill)} isPressed={pill === demographicsAnswers.gender} />          
              ))}
          </View>
        </View>

      <View style={styles.subcontainer}>
        <Text style={globalStyles.headingThree}>In what year were you born?</Text>
        <Dropdown text="select a year" options={years} onSelect={handleBirthYear} currentValue={demographicsAnswers.birthYear}/>
      </View>

      <View style={styles.subcontainer}>
        <Text style={globalStyles.headingThree}>Which of the following U.S. Census categories most closely represents your race/ethnicity?</Text>
        <Dropdown text="select a race/ethnicity" options={races} onSelect={handleRace} currentValue={demographicsAnswers.race}/> 
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.buttonContainer}>
          <Button  onPress={handleBack} text="Back"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button  onPress={handleNext} text="Next"/>
        </View>
      </View>  

      </View>
    </View>
  );
}

export default Demographics1;
