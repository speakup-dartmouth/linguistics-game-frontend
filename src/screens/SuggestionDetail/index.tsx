import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { useAppNavigation } from 'navigation/types';
import Back from 'assets/backArrow.svg'
import LaunchedCard from "screens/Suggest/launchedCard";
import SuggestedCard from "screens/Suggest/suggestedCard";
import * as Progress from 'react-native-progress';
import Check from 'assets/approve.svg';
import { useAppSelector } from 'redux/hooks';
import { useGetQuestionQuery, useGetAnswersQuery } from 'services/api';
import Loader from "components/UI/Loader";
import { useAppDispatch } from 'redux/hooks';
import { setCurrentQuestion } from "redux/slices/questionSlice";
import Icon from 'react-native-vector-icons/AntDesign';

function SuggestionDetail(): JSX.Element {
    const navigation = useAppNavigation();
    const dispatch = useAppDispatch();
    const { currentSuggestion } = useAppSelector((state) => state.suggestion);
    // const { currentQuestion, questionAnswers } = useAppSelector((state) => state.question);
    const { data: currentQuestion, isLoading } = useGetQuestionQuery({ questionId: currentSuggestion?.question || '' });    
    const { data: questionAnswers, isSuccess } = useGetAnswersQuery({ questionId: currentSuggestion?.question || '' });

    if (isLoading || (!isSuccess && currentSuggestion.status == 'approved') ) {
        return (
          <View style={styles.container}>
            <Loader fullWidth />
          </View>
        );
    }

    const back = () =>  {
        dispatch(setCurrentQuestion(null));
        navigation.goBack();
    }

    function formatText(pointsByStance, totalVotes) {
        console.log(pointsByStance)
        return (
            <View>
                {Object.entries(currentSuggestion.stances).map((item) => {
                    return (
                        <View key={item[1]['_id']}>
                            <Text style={[styles.percent, {color: item[1]['color']}]}>
                            {isNaN((pointsByStance[item[1].stance] / totalVotes) * 100)
                                ? '0%'
                                : Math.round((pointsByStance[item[1].stance] / totalVotes) * 100) + '%'}
                            </Text>
                            <Text>{item[1]['stance']}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    function Approved() {
        // const answers = questionAnswers[currentQuestion._id] || [];
        let top = {
            user: "",
            upvotes: 0
        }

        const pointsByStance = questionAnswers.reduce((acc, answer) => {
            if (!answer.stance) return acc;

            if (answer.upvoteCount > top.upvotes) {
                top.upvotes = answer.upvoteCount
                top.user = answer.user.username
            }
            if (acc[answer.stance]) {
              acc[answer.stance] += answer.upvoteCount;
              acc[answer.stance] -= answer.downvoteCount;
            } else {
              acc[answer.stance] = answer.upvoteCount - answer.downvoteCount;
            }
            return acc;
          }, currentQuestion.options.reduce((acc, option) => {
            if (option) { acc[option] = 1; }
            return acc;
          }, {} as Record<string, number>));

        const totalVotes = Object.values(pointsByStance).reduce((acc, val) => acc + val, 0);
        const firstStance = currentSuggestion.stances[0].stance; 
        const votesForFirstStance = pointsByStance[firstStance] || 0;
        const dateSubmitted = new Date(currentSuggestion.dateSubmitted);
        const dateApproved = new Date(currentQuestion.createdAt);

        return (
            <SafeAreaView style={styles.display}>
                <View style={styles.card}>
                    <LaunchedCard suggestion={currentSuggestion} />
                </View>
                <View style={[styles.statsContainer, styles.shadowContainer]}>
                    <Text style={styles.promptText}>Engagement</Text>
                    <View style={styles.infoContainer}>
                        <Progress.Circle 
                            progress={votesForFirstStance/totalVotes} 
                            borderWidth={0} 
                            color={currentSuggestion.stances[0].color} 
                            unfilledColor={currentSuggestion.stances[1]?.color || '#FFC555'}
                            size={165}
                            thickness={25}
                            showsText={true}
                            formatText={() => formatText(pointsByStance, totalVotes)}
                            strokeCap="round"
                        />
                        <View style={styles.stats}>
                            <View>
                                <Text style={styles.statText}>{questionAnswers.length}</Text>
                                <Text style={styles.statType}>Recordings</Text>
                            </View>
                            <View style={styles.separator} />
                            <View>
                                <Text style={styles.statText} numberOfLines={1} adjustsFontSizeToFit={true}>{top.user}</Text>
                                <Text style={styles.statType}>Most Upvotes</Text>
                            </View>
                            <View style={styles.separator} />
                            <View>
                                <Text style={styles.statText}>{totalVotes}</Text>
                                <Text style={styles.statType}>Votes</Text>
                            </View>
                        </View>
                    </View>                    
                </View>
                <View style={[styles.timelineContainer, styles.shadowContainer]}>
                    <Text style={styles.promptText}>Submission Timeline</Text>
                    <View style={styles.timeline}>
                        <View style={styles.checkColumn}>
                            <Check />
                            <View style={styles.line} />
                            <Check />
                        </View>
                        <View style={styles.status}>
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>{dateSubmitted.toDateString()}</Text>
                            </View>
                            <View style={styles.invisibleLine} />
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Approved</Text>
                                <Text style={styles.timelineText}>{dateApproved.toDateString()}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    function NotApproved() {
        const dateSubmitted = new Date(currentSuggestion.dateSubmitted)
        return (
            <SafeAreaView style={styles.display}>
                <SuggestedCard suggestion={currentSuggestion} />
                <View style={[styles.timelineContainer, styles.shadowContainer]}>
                    <Text style={styles.promptText}>Submission Status</Text>
                    <View style={styles.timeline}>
                        <View style={styles.checkColumn}>
                            <Check />
                            <View style={styles.line} />
                            <Icon name="clockcircleo" size={21} color="rgba(0, 0, 0, 0.50)" />
                        </View>
                        <View style={styles.status}>
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>{dateSubmitted.toDateString()}</Text>
                            </View>
                            <View style={styles.invisibleLine} />
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Approved</Text>
                                <Text style={styles.timelineText}>Pending</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Back style={styles.arrow} onPress={back} />
                <Text style={styles.headerText}>Submission Details</Text>
            </View>
            {currentSuggestion.status == 'approved' && (
                <Approved />
            )}
            {currentSuggestion.status != 'approved' && (
                <NotApproved />
            )}
        </SafeAreaView>
    )
}

export default SuggestionDetail;