import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useAppNavigation } from 'navigation/types';
import styles from "./styles";
import Art from 'assets/art.svg';
import Fashion from 'assets/fashion.svg';
import Music from 'assets/music.svg';
import Movies from 'assets/movie.svg';
import Food from 'assets/food.svg';
import Pop from 'assets/pop-culture.svg';
import Sports from 'assets/sports.svg';
import TV from 'assets/tv.svg';
import YouTube from 'assets/youtube.svg';
import History from 'assets/history.svg';
import Travel from 'assets/travel.svg';
import Astrology from 'assets/astrology.svg';
import Approve from 'assets/approve.svg';
import Denied from 'assets/denied.svg';

function SuggestedCard( {suggestion} ): JSX.Element {
    const navigation = useAppNavigation();

    const onPress = () => {
        navigation.navigate('SuggestionDetail');
    }

    function getIcon(suggestion) {
        switch (suggestion.icon) {
            case 'fashion':
                return <Fashion />
            case 'music':
                return <Music />
            case 'movies':
                return <Movies />
            case 'art':
                return <Art />
            case 'food':
                return <Food />
            case 'pop':
                return <Pop />
            case 'sports':
                return <Sports />
            case 'tv':
                return <TV />
            case 'youtube':
                return <YouTube />
            case 'history':
                return <History />
            case 'travel':
                return <Travel />
            case 'astrology':
                return <Astrology />
            default:
                return <Movies />
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
                    {Object.entries(suggestion.stances).map(([stance, color]) => {
                        return (
                            <View key={stance} style={[styles.pill, { backgroundColor: color }]}>
                                <Text style={styles.pillText}>{stance}</Text>
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