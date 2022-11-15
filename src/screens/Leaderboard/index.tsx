/* eslint-disable no-nested-ternary */
import {
  FlatList, SafeAreaView, Text, View, TouchableOpacity,
} from 'react-native';
import { useGetLeaderboardQuery } from 'services/api';
import { useEffect, useState } from 'react';
import {
  useFonts,
  Mulish_400Regular,
} from '@expo-google-fonts/mulish'; // this is the font used in the Figma - we should discuss a broader plan to adjust app fonts globally
import { useAppSelector } from 'redux/hooks';
import styles from './styles';

function getRankStyle(rank) {
  switch (rank) {
    case 1:
      return [styles.rankCircleContainer, styles.rankCircleOne];
    case 2:
      return [styles.rankCircleContainer, styles.rankCircleTwo];
    case 3:
      return [styles.rankCircleContainer, styles.rankCircleThree];
    default:
      return [styles.rankContainer];
  }
}

function Item({ username, rank, score }) {
  const authState = useAppSelector((state) => state.auth);
  return (
    <View style={(username === authState.username) ? styles.selfViewSubcontainer : styles.subcontainer}>
      <View style={getRankStyle(rank)}>
        <Text style={styles.rank}>{rank}</Text>
      </View>
      <Text style={[styles.username, { fontFamily: 'Mulish_400Regular' }]}>@{username}</Text>
      <Text style={[styles.score, { fontFamily: 'Mulish_400Regular' }]}>
        {!score ? ('-') : score === 1 ? (`${score} pt`) : (`${score} pts`)}
      </Text>
    </View>
  );
}

function LeaderboardScreen(): JSX.Element {
  const { data: leaderboard, isLoading } = useGetLeaderboardQuery();
  const [isModalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Item username={item.username} rank={index + 1} score={item.score} />
    );
  };

  useEffect(() => {
    if (isLoading || !fontsLoaded) {
      console.log('still loading data...');
    }
  }, []);

  if (isLoading) {
    return (<View><Text>Loading</Text></View>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, { fontFamily: 'Mulish_400Regular' }]}>Leaderboard</Text>
        <TouchableOpacity style={styles.infoButton} onPress={toggleModal}>
          <Text style={styles.infoButtonText}>i</Text>
        </TouchableOpacity>
      </View>
      { isModalVisible
        && (
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>{'Points are calculated by\nsubtracting a user’s total\ndownvotes from their upvotes'} </Text>
            <TouchableOpacity style={styles.infoButtonInner} onPress={toggleModal}>
              <Text style={styles.infoButtonText}>i</Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
      <FlatList
        data={leaderboard}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
    </SafeAreaView>
  );
}

export default LeaderboardScreen;
