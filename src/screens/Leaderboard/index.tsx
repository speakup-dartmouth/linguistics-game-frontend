import {
  FlatList, SafeAreaView, TouchableOpacity, Text, View,
} from 'react-native';
import { useGetLeaderboardQuery } from 'services/api';
import { useEffect } from 'react';
import styles from './styles';

let counter = 0;

function Item({ username, rank, score }) {
  return (
    <TouchableOpacity style={styles.subcontainer} onPress={() => console.log(`ultimately, navigate to ${username}'s profile? to discuss with designers :)`)}>
      <Text style={styles.rank}>{rank}. </Text>
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.score}>{ score ? (`${score} XP`) : ('-')}</Text>
    </TouchableOpacity>
  );
}

function LeaderboardScreen(): JSX.Element {
  const { data: leaderboard, isLoading } = useGetLeaderboardQuery();

  const renderItem = ({ item }) => {
    counter += 1;
    return (
      <Item username={item.username} rank={counter} score={item.score} />
    );
  };

  useEffect(() => {
    counter = 0;
    if (isLoading) {
      console.log('still loading...');
    }
    console.log(leaderboard);
  }, []);

  if (isLoading) {
    return (<View><Text>Loading</Text></View>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Leaderboard</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.rankLabel}>Rank</Text>
        <Text style={styles.usernameLabel}>Username</Text>
        <Text style={styles.scoreLabel}>Score</Text>
      </View>
      <FlatList
        data={leaderboard}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
    </SafeAreaView>
  );
}

export default LeaderboardScreen;
