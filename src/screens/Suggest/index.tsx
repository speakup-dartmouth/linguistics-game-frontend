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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <View style={styles.questionsContainer}>
            {!isLoading && filteredQuestions.map((question) => (
              <QuestionCard key={question._id} question={question} />
            ))}

            {isLoading && (
              <Loader fullWidth />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SuggestScreen;
