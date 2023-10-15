import {
  SafeAreaView, View, Text, TextInput, Pressable, FlatList
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useQueryQuestionsQuery } from 'services/api';
import { useState } from 'react';
import styles from './styles';
import {
  useFonts,
  Mulish_400Regular,
} from '@expo-google-fonts/mulish';
import InfoCard from './infoCard';
import { useAppNavigation } from 'navigation/types';
import LaunchedCard from './launchedCard';
import SuggestedCard from './suggestedCard';
import ConsentCard from './consentCard';

function SuggestScreen(): JSX.Element {
  const [query, onChangeQuery] = useState('');
  const navigation = useAppNavigation();
  const { researchConsent } = useAppSelector((state) => state.auth);

  var suggested = [
    {
    id: 0,
    prompt: 'What came first?',
    stances: {'Chicken': '#5BC0EB', 'Egg': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    status: 'review',
    icon: 'art',
  },
  {
    id: 1,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'denied',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 2,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'denied',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 3,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'denied',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 4,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'denied',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 5,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'denied',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 6,
    prompt: 'Socks with sandals?',
    stances: {'Stylish': '#FB4E4E', 'Fashion Nightmare': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'approved',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 7,
    prompt: 'What came first?',
    stances: {'Chicken': '#5BC0EB', 'Egg': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'approved',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
  {
    id: 8,
    prompt: 'What came first?',
    stances: {'Chicken': '#5BC0EB', 'Egg': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'approved',
    icon: 'art',
    responses: 0,
    percent: 0,
  },
];

  var hasSuggested = (suggested.length > 0);

  return (
    <SafeAreaView style={styles.container} >
      {!hasSuggested && researchConsent && (
        <InfoCard />
      )}

      {hasSuggested && researchConsent && (
        <View style={styles.topicViewContainer}>
          <TextInput
            onChangeText={(text) => onChangeQuery(text)}
            value={query}
            style={styles.queryInput}
            placeholder='Search'
          />
          <View style={styles.label} >
            <Text style={styles.welcomeSubheader}>IN REVIEW</Text>
          </View>

          <SafeAreaView style={styles.scrollView}>
              <FlatList
              data={suggested}
              renderItem={({item}) => <SuggestedCard suggestion={item} />} />
          </SafeAreaView>

          <View style={styles.label} >
            <Text style={styles.welcomeSubheader}>LAUNCHED</Text>
          </View>
          
          <SafeAreaView style={styles.scrollViewLaunched}>
              <FlatList
              data={suggested}
              renderItem={({item}) => <LaunchedCard suggestion={item} />} />
          </SafeAreaView>
        </View>
      )}

      {!researchConsent && (
        <ConsentCard />
      )}
      
      <Pressable
        style={{ ...styles.submitButton, opacity: researchConsent ? 1 : .5 }}
        onPress={() => {
          navigation.navigate('CreateSuggestion')
        }}
        disabled={!researchConsent}
      >
        <Text style={styles.buttonText}>Suggest a Topic!</Text>
      </Pressable>
      
    </SafeAreaView>
  );
}

export default SuggestScreen;
