import React from 'react';
import { View, Text, Image } from 'react-native';
import { Question } from 'redux/slices/questionSlice';
import styles from './styles';

function QuestionCard({ question }: {question: Question}): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {question.photoUrl && <Image style={styles.image} source={{ uri: question.photoUrl }} />}
      </View>
      <Text style={styles.title}>{question.title}</Text>
      <Text style={styles.description}>{question.description}</Text>
    </View>
  );
}

export default QuestionCard;
