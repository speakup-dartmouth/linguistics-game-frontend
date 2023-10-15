import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { useAppNavigation } from 'navigation/types';
import Back from 'assets/backArrow.svg'
import LaunchedCard from "screens/Suggest/launchedCard";
import SuggestedCard from "screens/Suggest/suggestedCard";
import * as Progress from 'react-native-progress';
import Check from 'assets/approve.svg';

function SuggestionDetail(): JSX.Element {
    const navigation = useAppNavigation();

    const back = () =>  {
        navigation.goBack();
    }

    // redux ==> have a variable for selected suggested topic, then if the status is approved, get that topic from the backend?
    var topic = {
        id: 7,
        prompt: 'What came first?',
        stances: {'Chicken': '#5BC0EB', 'Egg': '#FFBC1F'},
        submitted: 'September 9, 2020, 10:13 AM',
        launched: 'September 11, 2020',
        status: 'approved',
        icon: 'art',
    }

    function formatText() {
        return (
            <View>
                <Text style={[styles.percent, { color: '#5BC0EB' }]}>40%</Text>
                <Text>Chicken</Text>

                <Text style={[styles.percent, { color: '#FFBC1F' }]}>60%</Text>
                <Text>Egg</Text>
            </View>
        )
    }

    function Approved() {
        return (
            <SafeAreaView style={styles.display}>
                <View style={styles.card}>
                    <LaunchedCard suggestion={topic} />
                </View>
                <View style={[styles.statsContainer, styles.shadowContainer]}>
                    <Text style={styles.promptText}>Engagement</Text>
                    <View style={styles.infoContainer}>
                        <Progress.Circle 
                            progress={.4} 
                            borderWidth={0} 
                            color='#5BC0EB' 
                            unfilledColor='#FFBC1F'
                            size={165}
                            thickness={25}
                            showsText={true}
                            formatText={formatText}
                            strokeCap="round"
                        />
                        <View style={styles.stats}>
                            <View>
                                <Text style={styles.statText}>383</Text>
                                <Text style={styles.statType}>Recordings</Text>
                            </View>
                            <View style={styles.separator} />
                            <View>
                                <Text style={styles.statText}>1,523</Text>
                                <Text style={styles.statType}>Minutes</Text>
                            </View>
                            <View style={styles.separator} />
                            <View>
                                <Text style={styles.statText}>6,389</Text>
                                <Text style={styles.statType}>Upvotes</Text>
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
                            <View style={styles.line} />
                            <Check />
                            <View style={styles.line} />
                            <Check />
                        </View>
                        <View style={styles.status}>
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>Sep 1 2022</Text>
                            </View>
                            <View style={styles.invisibleLine} />
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>Sep 1 2022</Text>
                            </View>
                            <View style={styles.invisibleLine} />
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>Sep 1 2022</Text>
                            </View>
                            <View style={styles.invisibleLine} />
                            <View style={styles.statusContainer}>
                                <Text style={styles.timelineText}>Topic Submitted</Text>
                                <Text style={styles.timelineText}>Sep 1 2022</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    function NotApproved() {
        return (
            <SafeAreaView>
                <SuggestedCard suggestion={topic} />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Back style={styles.arrow} onPress={back} />
                <Text style={styles.headerText}>Submission Details</Text>
            </View>
            {topic.status == 'approved' && (
                <Approved />
            )}
            {topic.status != 'approved' && (
                <NotApproved />
            )}
        </SafeAreaView>
    )
}

export default SuggestionDetail;