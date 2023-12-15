import Button from 'components/UI/Button';
import Pill from 'components/UI/Pill';
import Dropdown from 'components/UI/Dropdown';
import TypeandSelect from 'components/UI/TypeandSelect';
import { globalStyles } from 'lib/styles';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useUpdateUserMutation } from 'services/api';
import { useAppNavigation } from 'navigation/types';
import Textbox from 'components/UI/Textbox';
import styles from './styles';
import SearchableDropdown from 'react-native-searchable-dropdown';

function Demographics2({ demographicsAnswers, updateDemographics, nextScreen, prevScreen, stateAbbreviations }): JSX.Element {
  // List of state dropdown options
  const states = Object.keys(stateAbbreviations);
  states.unshift('select a state');
  states.push('Outside the US');
  
  const childState = demographicsAnswers.childState;
  var stateAbbr = null;
  if (childState != 'Outside the US') {
    stateAbbr = stateAbbreviations[childState];
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
      console.log('Data:', data); // Log the retrieved data

    if (Array.isArray(data)) {
      return data.map((townsData) => townsData.name);
    } else {
      console.error('Data received is not an array:', data);
      return [];
    }
      // return data.map((townsData) => townsData.name);
      // return data;
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
    const currentState = demographicsAnswers.childState;
    if (selectedState === 'select a state') {
      updateDemographics({ childState: null });
    } else {
      updateDemographics({ childState: selectedState });
    }
  };

  const handleTown = (selectedTown) => {
    const currentTown = demographicsAnswers.childTown;
    if (selectedTown.name === currentTown) {
      updateDemographics({ childTown: null });
    } else {
      updateDemographics({ childTown: selectedTown.name });
    }
  };
  
  const handleLocale = (selectedLocale) => {
    const currentLocale = demographicsAnswers.childLocale;
    if (selectedLocale === currentLocale) {
      updateDemographics({ childLocale: null });
    } else {
      updateDemographics({ childLocale: selectedLocale });
    }
  };

  const handleZip = (selectedZipCode) => {
    const currentZipCode = demographicsAnswers.childZip;
    if (selectedZipCode.name === currentZipCode) {
      updateDemographics({ childZip: null });
    } else {
      updateDemographics({ childZip: selectedZipCode.name });
    }
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
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={globalStyles.headingOne}>Demographics</Text>

        <View style={styles.subcontainer}>
        <Text style={styles.questionText}>
          <Text>During</Text>
          <Text style={{fontWeight: "bold"}}> ages 0-12</Text>
          <Text>, in which state did you spend the most time?</Text>
        </Text>
          <Dropdown placeholder="select a state" options={states} onSelect={handleState} currentValue={demographicsAnswers.childState}/>
        </View>

        <View style={styles.subcontainer}>
        <Text style={styles.questionText}>
          <Text>During</Text>
          <Text style={{fontWeight: "bold"}}> ages 0-12</Text>
          <Text>, what is the name of the city/town you spend the most time in?</Text>
        </Text>
        <SearchableDropdown
            onItemSelect={handleTown}
            containerStyle={{ padding: 5 }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 15,
            }}
            itemTextStyle={styles.dropdownText}
            itemsContainerStyle={{ maxHeight: 200 }}
            items={towns_cities}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                // placeholder: demographicsAnswers.childZip,
                underlineColorAndroid: "transparent",
                style: styles.dropdown,
                placeholderTextColor: 'black',
                fontWeight: '500',
              }
            }
            placeholder={demographicsAnswers.childTown.toString() ? demographicsAnswers.childTown.toString() : 'begin typing a city/town'}
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
        </View>

        <View style={styles.subcontainer}>
        <Text style={styles.questionText}>
          <Text>During</Text>
          <Text style={{fontWeight: "bold"}}> ages 0-12</Text>
          <Text>, what is the 5 digit zip code in which you spent the most time?</Text>
        </Text>

        <SearchableDropdown
            onItemSelect={handleZip}
            containerStyle={{ padding: 5 }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 15,
            }}
            itemTextStyle={styles.dropdownText}
            itemsContainerStyle={{ maxHeight: 200 }}
            items={zips}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                // placeholder: demographicsAnswers.childZip,
                underlineColorAndroid: "transparent",
                style: styles.dropdown,
                placeholderTextColor: 'black',
                fontWeight: '500',
              }
            }
            placeholder={demographicsAnswers.childZip.toString() ? demographicsAnswers.childZip.toString() : 'begin typing a zip code'}
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }/>
        </View>

        <View style={styles.pillGroup}>
        <Text style={styles.questionText}>
          <Text>During</Text>
          <Text style={{fontWeight: "bold"}}> ages 0-12</Text>
          <Text>, which of the following best describes your location?</Text>
        </Text>
          <View style={styles.pillGroup}>
            {locales.map((pill) => (
              <Pill key={pill} pill={pill} onPress={() => handleLocale(pill)} isPressed={pill === demographicsAnswers.childLocale} />          
              ))}
          </View>
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

export default Demographics2;
