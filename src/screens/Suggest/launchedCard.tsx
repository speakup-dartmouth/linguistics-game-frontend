import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useAppNavigation } from 'navigation/types';
import * as Progress from 'react-native-progress';
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
import MiniMic from 'assets/minimic.svg'

function LaunchedCard( {suggestion} ): JSX.Element {
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

    var color1 = Object.values(suggestion.stances)[0];
    var color2 = Object.values(suggestion.stances)[1];
    return (
        <TouchableOpacity onPress={onPress} style={[styles.topicContainerLaunched, styles.shadowContainer]}>
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
                <View style={styles.recordingContainer}>
                    <MiniMic />
                    <View>
                        <Text style={styles.promptText}>383</Text>
                        <Text style={{ fontSize:10 }}>Recordings</Text>
                    </View>
                </View>
                </View>

                <Text style={styles.date}>Submitted {suggestion.submitted}</Text>
                <Progress.Bar progress={0.3} width={250} color={color1} unfilledColor={color2} borderWidth={0} height={10} />
            </View>
        </TouchableOpacity>
    )
}

export default LaunchedCard;