import {
  SafeAreaView, View, Text, TextInput, Pressable, FlatList
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import Loader from 'components/UI/Loader';
import { useGetSuggestionsByUserQuery } from 'services/api';
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
  const { researchConsent, id } = useAppSelector((state) => state.auth);
  const { suggestions } = useAppSelector((state) => state.suggestion)
  const { isLoading } = useGetSuggestionsByUserQuery({ userId: id });

  return (
    <SafeAreaView style={styles.container} >

      {isLoading && (
        <Loader fullWidth />
      )}

      {!isLoading && suggestions.length == 0 && researchConsent && (
        <InfoCard />
      )}

      {!isLoading && suggestions.length > 0 && researchConsent && (
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

          <View style={styles.scrollView}>
              <FlatList
              data={suggestions}
              renderItem={({item}) => <SuggestedCard suggestion={item} />} 
              />
          </View>

          <View style={styles.label} >
            <Text style={styles.welcomeSubheader}>LAUNCHED</Text>
          </View>
          
          <View style={styles.scrollViewLaunched}>
              <FlatList
              data={suggestions.filter((item) => {return item.status === 'approved'})}
              renderItem={({item}) => <LaunchedCard suggestion={item} />} />
          </View>
        </View>
      )}

      {!isLoading && !researchConsent && (
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
