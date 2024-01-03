import Button from 'components/UI/Button';
import Pill from 'components/UI/Pill';
import Dropdown from 'components/UI/Dropdown';
import TypeandSelect from 'components/UI/TypeandSelect';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';
import { MultiSelect } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

function Demographics6({ demographicsAnswers, updateDemographics, nextScreen, prevScreen, handleDemSubmit }): JSX.Element {
  const [selected, setSelected] = useState([...demographicsAnswers.childhoodLanguages]);

  const languages = [
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
    { label: 'Dutch', value: 'Dutch' },
    { label: 'Swedish', value: 'Swedish' },
    { label: 'Norwegian', value: 'Norwegian' },
    { label: 'Danish', value: 'Danish' },
    { label: 'Finnish', value: 'Finnish' },
    { label: 'Chinese', value: 'Chinese' },
    { label: 'Japanese', value: 'Japanese' },
    { label: 'Korean', value: 'Korean' },
    { label: 'Vietnamese', value: 'Vietnamese' },
    { label: 'Russian', value: 'Russian' },
  ];

  const renderItem = item => {
    return (
      <View style={styles.dropdownText}>
        <Text style={styles.dropdownText}>{item.label.toString()}</Text>
      </View>
    );
  };

  
  ////////// Update Demographics //////////

  const handleLanguages = (selectedLanguages) => {
    updateDemographics({ childhoodLanguages: selectedLanguages });
  };
  
  ////////////// Navigation ///////////////

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
            <Text style={styles.questionNumber}>19</Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>What languages did you grow up speaking naturally as a child with family and friends?</Text>

            <MultiSelect
              style={styles.multiselect}
              containerStyle={styles.multiSelectContainer}
              itemContainerStyle={styles.dropdownRow}
              placeholderStyle={styles.dropdownText}
              selectedTextStyle={styles.dropdownText}
              inputSearchStyle={styles.dropdownText}
              activeColor={'#A6DDF4'}
              data={languages}
              labelField="label"
              valueField="value"
              placeholder="select one or more languages"
              value={selected}
              search
              searchPlaceholder="Search ..."
              renderRightIcon={() => (
                <Icon name="chevron-down" size={20} color="black" fontWeight={50} />
              )}              
              onChange={item => {
                handleLanguages(item);
                setSelected(item);
              }}
              renderSelectedItem={(item, unSelect) => (
                <TouchableOpacity onPress={() => {
                  const languageIndex = demographicsAnswers.languages.indexOf(item.label);
              
                  if (languageIndex !== -1) {
                    // Language is present in demographicsAnswers.languages
                    const updatedLanguages = [...demographicsAnswers.languages];
                    updatedLanguages.splice(languageIndex, 1); // Remove the language
                    updateDemographics({ languages: updatedLanguages });
                  }
                  unSelect && unSelect(item); // Call unSelect from the MultiSelect component
                }}>
                  <View style={styles.pillGroup}>
                    <Pill pill={item.label} isPressed={true} onPress={() => unSelect && unSelect(item)} />
                  </View>
                </TouchableOpacity>
              )}       
            />

          </View>        
        </View>

        <View style={styles.prevNextContainer}>
          <View style={styles.buttonContainer}>
            <Button  onPress={handleBack} text="Back"/>
          </View>
          <View style={styles.buttonContainer}>
            <Button  onPress={handleDemSubmit} text="Done!"/>
          </View>
        </View>  
      </View>
    </View>
  );
}

export default Demographics6;
