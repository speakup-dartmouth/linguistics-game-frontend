import Button from 'components/UI/Button';
import Pill from 'components/UI/Pill';
import Dropdown from 'components/UI/Dropdown';
import ModalDropdown from 'react-native-modal-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function Demographics1({ demographicsAnswers, updateDemographics, nextScreen, prevScreen }): JSX.Element {
  const navigation = useAppNavigation();

  const genders = ['female', 'male', 'non-binary', 'other'];
  const races = ['select a race/ethnicity', 'White', 'Black or African American', 'American Indian or Alaska Native', 'Asian', 'Hispanic', 'Native Hawaiian or Other Pacific Islander'];

  // Generate birth year options
  const getCurrentYear = () => new Date().getFullYear();
  const generateYears = () => {
    const currentYear = getCurrentYear();
    const startYear = 1900;
    const endYear = currentYear - 18;

    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year.toString());
    }
    
    return years;
  };

  const years = generateYears();
  years.unshift('select a year');

  ////////////// Navigation ///////////////
  const handleNext = () => {
    nextScreen();
  };
  const handleBack = () => {
    navigation.navigate('ProfilePage')
  };

  ////////////// Update Demographics ////////////

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
    if (selectedRace === 'select a race') {
      updateDemographics({ race: null });
    } else {
      updateDemographics({ race: selectedRace });
    }
  };

  const handleBirthYear = (selectedBirthYear) => {
    const currentBirthYear = demographicsAnswers.birthYear;
    if (selectedBirthYear === 'select a year') {
      updateDemographics({ birthYear: null });
    } else {
      updateDemographics({ birthYear: selectedBirthYear });
    }
  };  

  ////////////// Render ///////////////
  return (
    <View style={{width: '100%', backgroundColor: 'white', alignItems: 'center', height: '100%', flex:1,}}>
      <View style={styles.titleContainer}>
        <Text style={globalStyles.headingOne}>Demographics</Text>
      </View>

      <View style={styles.surveyContainer}>

        <View style={styles.questionContainer}>
          <View style={styles.questionNumberContainer}>
            <Text style={styles.questionNumber}>1</Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>What is your gender?</Text>
            <View style={styles.pillGroup}>
              {genders.map((pill) => (
                <Pill key={pill} pill={pill} onPress={() => handleGender(pill)} isPressed={pill === demographicsAnswers.gender} />          
                ))}
            </View>   
          </View>
        </View>

        <View style={styles.questionContainer}>
          <View style={styles.questionNumberContainer}>
            <Text style={styles.questionNumber}>2</Text>
          </View>

          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>In what year were you born?</Text>
            <SelectDropdown
              data={years}
              onSelect={(selectedItem, index) => handleBirthYear(selectedItem)}
              defaultButtonText={demographicsAnswers.birthYear ? demographicsAnswers.birthYear.toString() : 'select a year'}
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownDropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.dropdownText}
              rowTextForMatFunction={(item) => item}
              dropdownIconPosition={'right'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownOverlayColor={'transparent'}
              renderDropdownIcon={() => (
                <Icon name="chevron-down" size={20} color="black" fontWeight={50} />
              )}
            ></SelectDropdown>
          </View>
        </View>

         
        <View style={styles.questionContainer}>
          <View style={styles.questionNumberContainer}>
            <Text style={styles.questionNumber}>3</Text>
          </View>
          <View style={styles.questionTextContainer}> 
            <Text style={styles.questionText}>Which of the following U.S. Census categories most closely represents your race/ethnicity?</Text>
            <SelectDropdown
              data={races}
              onSelect={(selectedItem, index) => handleRace(selectedItem)}
              defaultButtonText={demographicsAnswers.race ? demographicsAnswers.race.toString() : 'select a race/ethnicity'}
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownDropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.dropdownText}
              rowTextForMatFunction={(item) => item}
              renderDropdownIcon={() => (
                <Icon name="chevron-down" size={20} color="black" fontWeight={50} />
              )}
              dropdownIconPosition={'right'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownOverlayColor={'transparent'}
            ></SelectDropdown>      
          </View>
        </View>
          

        <View style={styles.prevNextContainer}>
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
