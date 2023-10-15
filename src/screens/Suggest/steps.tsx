import React from "react";
import styles from './styles';
import { View, Text } from "react-native";

function Steps(): JSX.Element {
    return (
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
    )
}

export default Steps;