import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useAppNavigation } from 'navigation/types';
import * as Progress from 'react-native-progress';
import styles from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon  from 'react-native-vector-icons/MaterialIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import MiniMic from 'assets/minimic.svg'
import { setCurrentSuggestion } from "redux/slices/suggestionSlice";
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetAllAnswersQuery } from "services/api";
import Loader from "components/UI/Loader";

function LaunchedCard( {suggestion} ): JSX.Element {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const { allAnswers } = useAppSelector((state) => state.question)
    const { isSuccess } = useGetAllAnswersQuery();

    const thisAnswers = allAnswers.filter((item) => {
        return (item.question == suggestion.question)
    })

    // total number of answers is the number of responses + upvotes + downvotes
    let totalVotes = thisAnswers.length
    const pointsByStance = thisAnswers.reduce((acc, answer) => {
        if (!answer.stance) return acc;

        if (acc[answer.stance]) {
            // count the current answer as a vote for that stance
            acc[answer.stance] += 1
            acc[answer.stance] += answer.upvoteCount;
            acc[answer.stance] -= answer.downvoteCount;
        } else {
            acc[answer.stance] = answer.upvoteCount - answer.downvoteCount + 1;
        }
        totalVotes += answer.upvoteCount + answer.downvoteCount;
        return acc;
    }, {} as Record<string, number>);
    const firstStance = suggestion.stances[0].stance; 
    const votesForFirstStance = pointsByStance[firstStance] || 0;


    const onPress = () => {
        dispatch(setCurrentSuggestion(suggestion));
        navigation.navigate('SuggestionDetail');
    }

    function getIcon(suggestion) {
        switch (suggestion.icon) {
            case 'Fashion':
                return <Icon name="diamond-stone" size={32} color="black" />
            case 'Music':
                return <Icon name="music-note" size={32} color="black" />
            case 'Movies':
                return <Icon name="movie-outline" size={32} color="black" />
            case 'Art':
                return <Icon name="palette-outline" size={32} color="black" />
            case 'Food':
                return <Icon name="food-outline" size={32} color="black" />
            case 'Pop Culture':
                return <MIcon name="theater-comedy" size={37} color="black" />
            case 'Sports':
                return <MIcon name="sports-soccer" size={37} color="black" />
            case 'TV':
                return <MIcon name="tv" size={32} color="black" />
            case 'Youtube':
                return <Icon name="youtube" size={32} color="black" />
            case 'History':
                return <MIcon name="history-edu" size={38} color="black" />
            case 'Travel':
                return <Icon name="airplane-takeoff" size={32} color="black" />
            case 'Astrology':
                return <IIcon name="planet-outline" size={32} color="black" />
            default:
                return <MIcon name="theater-comedy" size={37} color="black" />
        }
    }

    var color1 = Object.values(suggestion.stances)[0]['color'];
    var color2 = Object.values(suggestion.stances)[1]['color'];
    // const answers = questionAnswers[currentQuestion._id] || [];
    return (
        <View>
            {!isSuccess && (
                <Loader fullWidth />
            )}

            {isSuccess && (
                <TouchableOpacity onPress={onPress} style={[styles.topicContainerLaunched, styles.shadowContainer]}>
                    <View style={styles.icon}>
                        {getIcon(suggestion)}
                    </View>
                    <View style={styles.reviewInfoContainer}>
                        <Text style={styles.promptText}>{suggestion.prompt}</Text>
                        <View style={styles.stanceContainer}>
                            {Object.entries(suggestion.stances).map((item) => {
                                return (
                                    <View key={item[1]['_id']} style={[styles.pill, { backgroundColor: item[1]['color'] }]}>
                                        <Text style={styles.pillText}>{item[1]['stance']}</Text>
                                    </View>
                                )
                            })}
                        <View style={styles.recordingContainer}>
                            <MiniMic />
                            <View>
                                <Text style={styles.promptText}>{thisAnswers.length}</Text>
                                <Text style={{ fontSize:10 }}>Recordings</Text>
                            </View>
                        </View>
                        </View>

                        <Text style={styles.date}>Submitted {suggestion.submitted}</Text>
                        <Progress.Bar progress={votesForFirstStance/totalVotes} width={250} color={color1} unfilledColor={color2} borderWidth={0} height={10} />
                    </View>
                </TouchableOpacity>
            )}  
        </View>
    )
}

export default LaunchedCard;