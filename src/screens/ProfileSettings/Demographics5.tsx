import Button from 'components/UI/Button';
import Pill from 'components/UI/Pill';
import Dropdown from 'components/UI/Dropdown';
import TypeandSelect from 'components/UI/TypeandSelect';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

function Demographics5({ demographicsAnswers, updateDemographics, nextScreen, prevScreen, stateAbbreviations }): JSX.Element {
  // List of state dropdown options
  const states = Object.keys(stateAbbreviations);
  states.unshift('Outside the US');
  
  const parentState = demographicsAnswers.parentState;
  const educations = ['select an education level', 'some high school or less', 'high school', 'some college, no degree', 'associate degree', "bachelor's degree" , 'graduate degree']
  
  ////////// Update Demographics //////////
  const handleState = (selectedState) => {
    const currentState = demographicsAnswers.parentState;
    updateDemographics({ parentState: selectedState });
  };

  const handleEducationLevel = (selectedEducationLevel) => {
    const currentEducationLevel = demographicsAnswers.educationLevel;
    if (selectedEducationLevel.name === 'select an education level') {
      updateDemographics({ educationLevel: null });
    } else {
      updateDemographics({ educationLevel: selectedEducationLevel });
    }
  };

  const handleOccupation = (occupation) => {
    updateDemographics({ occupation: occupation });
  };

  ////////////// Navigation ///////////////
  const handleNext = () => {
    nextScreen();
  };
  const handleBack = () => {
    prevScreen();
  };

  ////////////// Render ///////////////

  return (
    <View style={{width: '100%', backgroundColor: 'white', alignItems: 'center', height: '100%',flex: 1,}}>
      <View style={styles.titleContainer}>
      <Text style={globalStyles.headingOne}>Demographics</Text>
      </View>

      <View style={styles.surveyContainer}> 

        <View style={styles.questionContainer}>
          <View style={styles.questionNumberContainer}>
            <Text style={styles.questionNumber}>16</Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              <Text>In which state did your parents spend the most time?</Text>
            </Text>
            <SelectDropdown
              data={states}
              onSelect={(selectedItem, index) => handleState(selectedItem)}
              defaultButtonText={demographicsAnswers.parentState ? demographicsAnswers.parentState.toString() : 'select a state'}
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

          <View style={styles.questionContainer}>
            <View style={styles.questionNumberContainer}>
              <Text style={styles.questionNumber}>17</Text>
            </View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                <Text>Which of the following best describes your highest education level?</Text>
              </Text>
              <SelectDropdown
                data={educations}
                onSelect={(selectedItem, index) => handleEducationLevel(selectedItem)}
                defaultButtonText={demographicsAnswers.educationLevel ? demographicsAnswers.educationLevel.toString() : 'select an education level'}
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

          <View style={styles.questionContainer}>
            <View style={styles.questionNumberContainer}>
              <Text style={styles.questionNumber}>18</Text>
            </View>
            <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>Please enter your occupation. If currently unemployed, please enter your most recent occupation.</Text>
            <TextInput
              style={styles.dropdownButton}
              onChangeText={handleOccupation}
              value={demographicsAnswers.occupation}
              placeholder="type in your occupation"
              placeholderTextColor="black"
            />
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

export default Demographics5;
