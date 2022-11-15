import QuestionCard from 'components/QuestionCard';
import Loader from 'components/UI/Loader';
import {
  SafeAreaView, ScrollView, View, Text, TextInput, Button, GestureResponderEvent,
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useQueryQuestionsQuery } from 'services/api';
import { useState } from 'react';
import styles from './styles';

function SearchScreen(): JSX.Element {
  const { questions } = useAppSelector((state) => state.question);
  const [query, onChangeQuery] = useState('');
  const { isLoading } = useQueryQuestionsQuery({ q: query });

  const handleQuerySubmit = (e: GestureResponderEvent) => {
    e.preventDefault();
    console.log(`querying for ${query}`);
    // @ Tyler!! how do I do this properly
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.welcome}>Search</Text>
        <TextInput
          onChangeText={(text) => onChangeQuery(text)}
          value={query}
          style={styles.queryInput}
        />
        <Button title="GO" onPress={handleQuerySubmit} />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <View style={styles.questionsContainer}>
            {!isLoading && questions.map((question) => (
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

export default SearchScreen;
