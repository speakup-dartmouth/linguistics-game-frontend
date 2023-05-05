import QuestionCard from 'components/QuestionCard';
import Loader from 'components/UI/Loader';
import {
  SafeAreaView, ScrollView, View, Text, TextInput,
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useQueryQuestionsQuery } from 'services/api';
import { useState } from 'react';
import styles from './styles';

function SuggestScreen(): JSX.Element {
  const { filteredQuestions } = useAppSelector((state) => state.question);
  const [query, onChangeQuery] = useState('');
  const { isLoading } = useQueryQuestionsQuery({ q: query });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.welcome}>Suggest</Text>
        <TextInput
          onChangeText={(text) => onChangeQuery(text)}
          value={query}
          style={styles.queryInput}
        />

      </View>
    </SafeAreaView>
  );
}

export default SuggestScreen;
