import Button from 'components/UI/Button';
import { globalStyles } from 'lib/styles';
import { useAppNavigation } from 'navigation/types';
import React, { useState } from 'react';
import {
  View, Text, Pressable, ScrollView,
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useGetAnswersQuery } from 'services/api';
import Loader from 'components/UI/Loader';
import RecordUI from './RecordingUI';
import styles from './styles';
import AnswerRow from './AnswerRow';

function QuestionDetail(): JSX.Element {
  const [isRecording, setIsRecording] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const { currentQuestion, questionAnswers } = useAppSelector((state) => state.question);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigation = useAppNavigation();

  const { isSuccess } = useGetAnswersQuery({ questionId: currentQuestion._id || '' });

  const onBackPress = () => {
    if (!isBackDisabled) {
      navigation.goBack();
    }
  };

  if (!currentQuestion || !isSuccess) {
    return (
      <View style={styles.container}>
        <Loader fullWidth />
      </View>
    );
  }

  const answers = questionAnswers[currentQuestion._id] || [];

  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}><Text style={styles.back}>{'< BACK'}</Text></Pressable>

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{currentQuestion.title}</Text>
        <Text style={styles.description}>{selectedOption ? `Your Stance: ${selectedOption}` : currentQuestion.description}</Text>

        {!isRecording && (
        <>
          <Text style={globalStyles.headingThree}>Votes</Text>
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <Button text="Speak your mind" onPress={() => { setIsRecording(true); }} />
          </View>

          <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            {answers.map((answer) => (
              <AnswerRow answer={answer} key={answer._id} />
            ))}
          </ScrollView>
        </>
        )}

        {isRecording && (
          <RecordUI
            setIsBackDisabled={setIsBackDisabled}
            question={currentQuestion}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setIsRecordingMode={setIsRecording}
          />
        )}
      </View>
    </View>
  );
}

export default QuestionDetail;
