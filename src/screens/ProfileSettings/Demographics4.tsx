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
import SearchableDropdown from 'react-native-searchable-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

function Demographics4({ demographicsAnswers, updateDemographics, nextScreen, prevScreen, stateAbbreviations }): JSX.Element {
  // List of state dropdown options
  const states = Object.keys(stateAbbreviations);
  states.unshift('Outside the US');
  
  const adultState = demographicsAnswers.adultState;
  var stateAbbr = null;
  if (adultState != 'Outside the US') {
    stateAbbr = stateAbbreviations[adultState];
  }

  const locales = ['rural', 'suburban', 'urban'];

  ///////////// Type and Search Towns by State //////////////
  const [towns, setTowns] = useState([]); // Towns fetched from API

  async function fetchTowns(stateAbbr) {
    const apiKey = 'eHVyVGxyeVZXSmFoM0ZteWtVMGh0bnE4aVpmNERyMWFIV2plSTRlNw==';
    const url = `https://api.countrystatecity.in/v1/countries/US/states/${stateAbbr}/cities`;
  
    const headers = new Headers();
    headers.append('X-CSCAPI-KEY', apiKey);
  
    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

    if (Array.isArray(data)) {
      return data.map((townsData) => townsData.name);
    } else {
      console.error('Data received is not an array:', data);
      return [];
    }
    } 
    catch (error) {
      console.error('Error:', error);
      return []; // Return an empty array if there's an error
    }
  }

  // Fetch town data when component mounts or when the state changes
  useEffect(() => {
    async function fetchData() {
      if (stateAbbr != null) {
        try {
          const fetchedTowns = await fetchTowns(stateAbbr);
          setTowns(fetchedTowns);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchData();
  }, [stateAbbr]);  

  // Convert towns list into proper format for SearchableDropdown
  var towns_cities;

  if (towns != null) {
    towns_cities = towns.map((town, index) => ({
      id: index + 1,
      name: town,
    }));
  }

  else {
    console.log("towns is null")
  }
 

  //////////////// Type and Search Zip Code by State ////////////////

  const [zipCodes, setZipCodes] = useState([]); // Zip codes fetched from API

  async function fetchZipCodes(stateAbbr) {
    const apiKey = 'TaS3MPqSd3yehmati1v/cg==51aFgiUwempcD3h4';
    const url = `https://api.api-ninjas.com/v1/zipcode?city=&state=${stateAbbr}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      return data.map((zipcodeData) => zipcodeData.zip_code);
    } catch (error) {
      console.error('Error:', error);
      return []; // Return an empty array if there's an error
    }
  }

  // Fetch zip code data when component mounts or when the state changes
  useEffect(() => {
    async function fetchData() {
      if (stateAbbr != null) {
        try {
          const fetchedZip = await fetchZipCodes(stateAbbr);
          setZipCodes(fetchedZip);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchData();
  }, [stateAbbr]);  

  // Convert zipCodes list into proper format for SearchableDropdown
  const zips = zipCodes.map((zip, index) => ({
    id: index + 1,
    name: zip,
  }));
  
  ////////// Update Demographics //////////
  const handleState = (selectedState) => {
    const currentState = demographicsAnswers.adultState;
    updateDemographics({ adultState: selectedState });
  };

  const handleTown = (selectedTown) => {
    updateDemographics({ teenTown: selectedTown });
  };
  
  const handleLocale = (selectedLocale) => {
    const currentLocale = demographicsAnswers.teenLocale;
    if (selectedLocale === currentLocale) {
      updateDemographics({ teenLocale: null });
    } else {
      updateDemographics({ teenLocale: selectedLocale });
    }
  };

  const handleZip = (selectedZipCode) => {
    updateDemographics({ teenZip: selectedZipCode });
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
            <Text style={styles.questionNumber}>12</Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              <Text style={{fontWeight: "bold"}}> After the age of 18</Text>
              <Text>, in which state did you spend the most time?</Text>
            </Text>
            <SelectDropdown
              data={states}
              onSelect={(selectedItem, index) => handleState(selectedItem)}
              defaultButtonText={demographicsAnswers.adultState ? demographicsAnswers.adultState.toString() : 'select a state'}
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
              <Text style={styles.questionNumber}>13</Text>
            </View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                <Text style={{fontWeight: "bold"}}>After age 18</Text>
                <Text>, what is the name of the city/town you spent the most time in?</Text>
              </Text>

              {adultState === 'Outside the US' ? (
                <TextInput
                  style={styles.dropdownButton}
                  onChangeText={handleTown}
                  value={demographicsAnswers.teenTown}
                  placeholder="type in a city/town"
                  placeholderTextColor="black"
                />
              ) : (
                <SelectDropdown
                  data={towns}
                  onSelect={(selectedItem, index) => handleTown(selectedItem)}
                  defaultButtonText={demographicsAnswers.teenTown ? demographicsAnswers.teenTown.toString() : 'begin typing a city/town'}
                  buttonStyle={styles.dropdownButton}
                  buttonTextStyle={styles.dropdownText}
                  dropdownStyle={styles.dropdownDropdown}
                  rowStyle={styles.dropdownRow}
                  rowTextStyle={styles.dropdownText}
                  rowTextForMatFunction={(item) => item}
                  search={true}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  dropdownOverlayColor={'transparent'}
                ></SelectDropdown>  
              )}
            </View>
          </View>

          <View style={styles.questionContainer}>
            <View style={styles.questionNumberContainer}>
              <Text style={styles.questionNumber}>14</Text>
            </View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                <Text style={{fontWeight: "bold"}}>After age 18</Text>
                <Text>, what is the 5 digit zip code in which you spent the most time?</Text>
              </Text>

              {adultState === 'Outside the US' ? (
                <TextInput
                  style={styles.dropdownButton}
                  onChangeText={handleZip}
                  value={demographicsAnswers.teenZip}
                  placeholder="type in a zip code"
                  placeholderTextColor="black"
                />
              ) : (
                <SelectDropdown
                  data={zipCodes}
                  onSelect={(selectedItem, index) => handleZip(selectedItem)}
                  defaultButtonText={demographicsAnswers.teenZip ? demographicsAnswers.teenZip.toString() : 'begin typing a zip code'}
                  buttonStyle={styles.dropdownButton}
                  buttonTextStyle={styles.dropdownText}
                  dropdownStyle={styles.dropdownDropdown}
                  rowStyle={styles.dropdownRow}
                  rowTextStyle={styles.dropdownText}
                  rowTextForMatFunction={(item) => item}
                  search={true}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  dropdownOverlayColor={'transparent'}
                ></SelectDropdown>  
              )}    
            </View>
          </View>

          <View style={styles.questionContainer}>
            <View style={styles.questionNumberContainer}>
              <Text style={styles.questionNumber}>15</Text>
            </View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                <Text>During</Text>
                <Text style={{fontWeight: "bold"}}> ages 13-18</Text>
                <Text>, which of the following best describes your location?</Text>
              </Text>
              <View style={styles.pillGroup}>
                {locales.map((pill) => (
                  <Pill key={pill} pill={pill} onPress={() => handleLocale(pill)} isPressed={pill === demographicsAnswers.teenLocale} />          
                  ))}
              </View>
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

export default Demographics4;
