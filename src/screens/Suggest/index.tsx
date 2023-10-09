import {
  SafeAreaView, View, Text, TextInput, Pressable, FlatList
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useQueryQuestionsQuery } from 'services/api';
import { useState } from 'react';
import styles from './styles';
import Logo from 'assets/logo-for-suggest.svg';
import Mic from 'assets/mic.svg'
import {
  useFonts,
  Mulish_400Regular,
} from '@expo-google-fonts/mulish';
import InfoCard from './infoCard';
import { useAppNavigation } from 'navigation/types';
import LaunchedCard from './launchedCard';
import SuggestedCard from './suggestedCard';

function SuggestScreen(): JSX.Element {
  const { filteredQuestions } = useAppSelector((state) => state.question);
  const [query, onChangeQuery] = useState('');
  const { isLoading } = useQueryQuestionsQuery({ q: query });

  const navigation = useAppNavigation();

  var suggested = [
    {
    id: 0,
    prompt: 'What came first?',
    stances: {'Chicken': '#5BC0EB', 'Egg': '#FFBC1F'},
    submitted: 'September 9, 2020, 10:13 AM',
    launched: -1,
    status: 'review',
    icon: 'art',
    responses: 0,
    percent: 0,
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

  var approved = suggested.filter((item) => item.status == 'approved')

  var hasSuggested = (suggested.length > 0);

  console.log(suggested, hasSuggested);

  return (
    <SafeAreaView style={styles.container} >
      {!hasSuggested && (
        <InfoCard />
      )}

      {hasSuggested && (
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
      
      <Pressable
        style={{ ...styles.submitButton }}
        onPress={() => {
          navigation.navigate('CreateSuggestion')
        }}
        // disabled={true}
      >
        <Text style={styles.buttonText}>Suggest a Topic!</Text>
      </Pressable>
      
    </SafeAreaView>
  );
}

export default SuggestScreen;
