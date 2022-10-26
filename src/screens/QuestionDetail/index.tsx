import Button from 'components/UI/Button';
import { globalStyles } from 'lib/styles';
import { useAppNavigation } from 'navigation/types';
import React, { useState } from 'react';
import {
  View, Text, Pressable,
} from 'react-native';
import { useAppSelector } from 'redux/hooks';
import RecordUI from './RecordingUI';
import styles from './styles';

function QuestionDetail(): JSX.Element {
  const [isRecording, setIsRecording] = useState(false);
  const { currentQuestion } = useAppSelector((state) => state.question);
  const navigation = useAppNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  if (!currentQuestion) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}><Text style={styles.back}>{'< BACK'}</Text></Pressable>

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{currentQuestion.title}</Text>
        <Text style={styles.description}>{currentQuestion.description}</Text>

        {!isRecording && (
        <>
          <Text style={globalStyles.headingThree}>Votes</Text>
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <Button text="Speak your mind" onPress={() => { setIsRecording(true); }} />
          </View>
        </>
        )}

        {isRecording && (
          <RecordUI />
        )}
      </View>
    </View>
  );
}

export default QuestionDetail;
