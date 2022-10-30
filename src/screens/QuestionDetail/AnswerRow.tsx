import { Answer } from 'redux/slices/questionSlice';
import {
  View, Text, Pressable,
} from 'react-native';
import Play from 'assets/play.svg';
import Pause from 'assets/pause.svg';
import { usePlayback } from 'lib/hooks';
import styles from './styles';

function AnswerRow({ answer }: {answer: Answer}): JSX.Element {
  const { isPlaying, startStopPlayback } = usePlayback(answer.recordingURL);

  if (!answer.recordingURL) return null;

  return (
    <View key={answer._id} style={styles.answerContainer}>
      <Pressable onPress={startStopPlayback}>{isPlaying ? <Pause width={50} height={50} /> : <Play width={50} height={50} />}</Pressable>

      <View>
        <Text style={styles.username}>{`@${answer.user.username}`}</Text>

        <View style={styles.stanceContainer}>
          <Text>Stance: </Text>
          <View style={styles.answerStance}><Text style={styles.stanceText}>{answer.stance}</Text></View>
        </View>
      </View>
    </View>
  );
}

export default AnswerRow;
