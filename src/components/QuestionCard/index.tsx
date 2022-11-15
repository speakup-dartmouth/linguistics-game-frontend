import { useAppNavigation } from 'navigation/types';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useAppDispatch } from 'redux/hooks';
import { Question, setCurrentQuestion } from 'redux/slices/questionSlice';
import styles from './styles';

function QuestionCard({ question }: {question: Question}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const onPress = () => {
    dispatch(setCurrentQuestion(question));
    navigation.navigate('QuestionDetail');
  };

  const options = question.options.map((val) => <Text style={styles.stancePill} key={val}>{val}</Text>);

  return (
    <TouchableOpacity key={question._id} style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          {question.photoUrl && <Image style={styles.image} source={{ uri: question.photoUrl }} />}
        </View>
        <Text style={styles.title}>{question.title}</Text>
        <Text style={styles.description}>{question.description}</Text>
        <View style={styles.stanceContainer}>{options}</View>
      </View>
    </TouchableOpacity>
  );
}

export default QuestionCard;
