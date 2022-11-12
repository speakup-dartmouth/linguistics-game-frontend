import Button from 'components/UI/Button';
import { globalStyles } from 'lib/styles';
import { useAppNavigation } from 'navigation/types';
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableHighlight,
} from 'react-native';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetAnswersQuery } from 'services/api';
import Loader from 'components/UI/Loader';
import { stopAllCurrentlyPlayingSounds } from 'redux/slices/questionSlice';
import RecordUI from './RecordingUI';
import styles from './styles';
import AnswerRow from './AnswerRow';

function QuestionDetail(): JSX.Element {
  const [isRecording, setIsRecording] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const { currentQuestion, questionAnswers } = useAppSelector((state) => state.question);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { isSuccess } = useGetAnswersQuery({ questionId: currentQuestion._id || '' });

  const onBackPress = () => {
    if (!isBackDisabled) {
      navigation.goBack();
      dispatch(stopAllCurrentlyPlayingSounds());
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
      <TouchableHighlight hitSlop={{
        top: 30, bottom: 30, left: 30, right: 30,
      }}
        onPress={onBackPress}
      ><Text style={styles.back}>{'< BACK'}</Text>
      </TouchableHighlight>

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
              <AnswerRow
                answer={answer}
                questionId={currentQuestion._id}
                key={answer._id}
              />
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
