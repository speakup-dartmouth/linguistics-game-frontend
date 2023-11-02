import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useAppNavigation } from 'navigation/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon  from 'react-native-vector-icons/MaterialIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import Approve from 'assets/approve.svg';
import Denied from 'assets/denied.svg';
import { useAppDispatch } from 'redux/hooks';
import { Suggestion, setCurrentSuggestion } from 'redux/slices/suggestionSlice';

function SuggestedCard( {suggestion} ): JSX.Element {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();

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

    return (
        <TouchableOpacity onPress={onPress} style={[styles.topicContainer, styles.shadowContainer]}>
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
                    {suggestion.status == 'approved' && (
                        <View style={styles.status}>
                            <Approve  />
                            <Text style={[styles.statusText, { color: '#30CFCD' }]}>Approved</Text>
                        </View>
                    )}
                    {suggestion.status == 'review' && (
                        <View style={styles.status}>
                            <Text style={[styles.statusText, { color: '#FFBC1F' }]}>In review</Text>
                        </View>
                    )}
                    {suggestion.status == 'denied' && (
                        <View style={styles.status}>
                            <Denied  />
                            <Text style={[styles.statusText, { color: '#FB4E4E' }]}>Denied</Text>
                        </View>
                    )}
                </View>
                <Text style={styles.date}>Submitted {suggestion.submitted}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SuggestedCard;