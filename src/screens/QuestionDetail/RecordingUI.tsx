import React from 'react';
import {
  View, Text, Pressable, TouchableOpacity,
} from 'react-native';
import { Question } from 'redux/slices/questionSlice';
import styles from './styles';

interface RecordUIProps {
  question: Question;
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
}

function RecordUI({ question, selectedOption, setSelectedOption }: RecordUIProps): JSX.Element {
  return (
    <View style={styles.recordingUi}>
      <Text style={styles.recordingHeader}>Ready?</Text>
      <Text style={styles.recordingSubheader}>Pick a stance:</Text>

      <View style={styles.stanceContainer}>
        {question.options.map((option, i) => (
          <>
            <Pressable
              key={option}
              style={[styles.stanceButton, selectedOption === option ? { backgroundColor: '#3297C1' } : {}]}
              onPress={() => { setSelectedOption(option); }}
            >
              <Text style={styles.stanceText}>{option}</Text>
            </Pressable>
            {i < question.options.length - 1 && !selectedOption && <View style={styles.dividerVertical} />}
          </>
        ))}
      </View>

      <TouchableOpacity style={styles.recordButton}><Text style={styles.kernedText}>{'BEGIN RECORDING >'}</Text></TouchableOpacity>
    </View>
  );
}

export default RecordUI;
