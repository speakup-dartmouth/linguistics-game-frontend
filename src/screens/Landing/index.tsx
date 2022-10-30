import QuestionCard from 'components/QuestionCard';
import Loader from 'components/UI/Loader';
import {
  SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useGetQuestionsQuery } from 'services/api';
import styles from './styles';

function LandingScreen(): JSX.Element {
  const { username } = useAppSelector((state) => state.auth);
  const { questions } = useAppSelector((state) => state.question);
  const { isLoading } = useGetQuestionsQuery();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.welcome}>Hi, {username}</Text>
        <Text style={styles.welcomeSubheader}>Ready to speak up?</Text>

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

export default LandingScreen;
