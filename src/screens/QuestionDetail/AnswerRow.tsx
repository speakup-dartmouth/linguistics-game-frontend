/* eslint-disable no-nested-ternary */
import { Answer, stopAllCurrentlyPlayingSounds } from 'redux/slices/questionSlice';
import {
  View, Text, Pressable, ActivityIndicator,
} from 'react-native';
import Play from 'assets/play.svg';
import Pause from 'assets/pause.svg';
import VoteUp from 'assets/vote-up.svg';
import VoteDown from 'assets/vote-down.svg';
import { useVoteMutation } from 'services/api';
import { colors } from 'lib/constants';
import { usePlayback } from 'lib/hooks';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import styles from './styles';

interface AnswerRowProps {
  answer: Answer;
  questionId: string;
}

function AnswerRow({
  answer, questionId,
}: AnswerRowProps): JSX.Element {
  const [vote] = useVoteMutation();
  const { id } = useAppSelector((state) => state.auth);
  const {
    isPlaying, startPlayback, stopPlayback, isBuffering,
  } = usePlayback(answer.recordingURL);
  const dispatch = useAppDispatch();

  if (!answer.recordingURL) return null;

  const startStop = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      dispatch(stopAllCurrentlyPlayingSounds());
      startPlayback();
    }
  };

  const cannotVote = answer.user._id === id;

  return (
    <View key={answer._id} style={styles.answerContainer}>
      <Pressable onPress={startStop}>{(isPlaying || isBuffering)
        ? (isBuffering
          ? <ActivityIndicator size={50} />
          : <Pause width={50} height={50} />)
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
        <Pressable
          onPressIn={() => vote({ answerId: answer._id, vote: 1, questionId })}
          hitSlop={5}
          disabled={cannotVote}
        >
          <VoteUp
            width={30}
            height={30}
          /* @ts-ignore */
            style={{ color: answer.userVoteStatus === 1 ? colors.lightBlue : '#373F41', opacity: cannotVote ? 0.5 : 1 }}
          />
        </Pressable>
        <Text style={styles.votes}>{answer.upvoteCount - answer.downvoteCount}</Text>

        <Pressable onPressIn={() => vote({ answerId: answer._id, vote: -1, questionId })} hitSlop={5} disabled={cannotVote}>
          <VoteDown
            width={30}
            height={30}
          /* @ts-ignore */
            style={{ color: answer.userVoteStatus === -1 ? colors.lightBlue : '#373F41', opacity: cannotVote ? 0.5 : 1 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default AnswerRow;
