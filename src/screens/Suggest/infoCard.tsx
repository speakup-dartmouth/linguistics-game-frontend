import { Pressable, SafeAreaView, View, Text } from "react-native";
import React from "react";
import styles from './styles';
import Logo from 'assets/logo-for-suggest.svg';
import Mic from 'assets/mic.svg'

function InfoCard(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.middleContainer}>
        <View style={[styles.subcontainer, styles.shadowContainer]}>
          <View style={styles.text}>
            <Text style={styles.welcome}>Topic Suggestion</Text>
            <Text style={styles.welcomeSubheader}>Suggest your own topics to see where others land!</Text>
          </View>
          <Mic />
        </View>
        <View style={[styles.directions, styles.shadowContainer]}>
          <View style={styles.step}>
            <View style={[styles.rankCircleContainer, styles.rankCircleOne]}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.directionText}>Submit Topic</Text>
          </View>
          <View style={styles.step}>
            <View style={[styles.rankCircleContainer, styles.rankCircleTwo]}>
              <Text style={styles.rank}>2</Text>
            </View>
            <Text style={styles.directionText}>Admin Review</Text>
          </View>
          <View style={styles.step}>
            <View style={[styles.rankCircleContainer, styles.rankCircleThree]}>
              <Text style={styles.rank}>3</Text>
            </View>
            <Text style={styles.directionText}>Speak Up!</Text>
          </View>
        </View>
      </View>
      {/* <Pressable
        style={{ ...styles.submitButton }}
        onPress={() => {
        }}
      >
        <Text style={styles.buttonText}>Suggest a Topic!</Text>
      </Pressable> */}
      
    </SafeAreaView>
  );
}

export default InfoCard;