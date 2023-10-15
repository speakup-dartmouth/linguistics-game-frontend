import { Pressable, SafeAreaView, View, Text } from "react-native";
import React from "react";
import styles from './styles';
import Logo from 'assets/logo-for-suggest.svg';
import Mic from 'assets/mic.svg'
import Steps from "./steps";

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
        <Steps />
      </View>
    </SafeAreaView>
  );
}

export default InfoCard;