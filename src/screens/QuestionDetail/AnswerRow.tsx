import { Answer } from 'redux/slices/questionSlice';
import {
  View, Text, Pressable,
} from 'react-native';
import Play from 'assets/play.svg';
import Pause from 'assets/pause.svg';
import VoteUp from 'assets/vote-up.svg';
import VoteDown from 'assets/vote-down.svg';
import { useVoteMutation } from 'services/api';
import { colors } from 'lib/constants';
import styles from './styles';

interface AnswerRowProps {
  answer: Answer;
  isPlaying: boolean;
  playSound: (uri: string) => void;
  stopSound: () => void;
  recordingUri: string | null;
  questionId: string;
}

function AnswerRow({
  answer, isPlaying, playSound, stopSound, recordingUri, questionId,
}: AnswerRowProps): JSX.Element {
  const [vote] = useVoteMutation();
  if (!answer.recordingURL) return null;

  const startStop = () => {
    if (isPlaying) {
      stopSound();
      if (recordingUri === answer.recordingURL) return;
      playSound(answer.recordingURL);
    } else {
      playSound(answer.recordingURL);
    }
  };

  return (
    <View key={answer._id} style={styles.answerContainer}>
      <Pressable onPress={startStop}>{(isPlaying && recordingUri === answer.recordingURL)
        ? <Pause width={50} height={50} />
        : <Play width={50} height={50} />}
      </Pressable>

      <View>
        <Text style={styles.username}>{`@${answer.user.username}`}</Text>

        <View style={styles.stanceContainer}>
          <Text>Stance: </Text>
          <View style={styles.answerStance}><Text style={styles.stanceText}>{answer.stance}</Text></View>
        </View>
      </View>

      <View style={styles.voting}>
        <Pressable onPressIn={() => vote({ answerId: answer._id, vote: 1, questionId })} hitSlop={5}>
          <VoteUp
            width={30}
            height={30}
          /* @ts-ignore */
            style={{ color: answer.userVoteStatus === 1 ? colors.lightBlue : '#373F41' }}
          />
        </Pressable>
        <Text style={styles.votes}>{answer.upvoteCount - answer.downvoteCount}</Text>

        <Pressable onPressIn={() => vote({ answerId: answer._id, vote: -1, questionId })} hitSlop={5}>
          <VoteDown
            width={30}
            height={30}
          /* @ts-ignore */
            style={{ color: answer.userVoteStatus === -1 ? colors.lightBlue : '#373F41' }}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default AnswerRow;
