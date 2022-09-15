import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={[styles.displayHeading, styles.paddingTop]}>
                    Display Heading
                </Text>
                <Text style={styles.display}>
                    Display
                </Text>
                <Text style={styles.heading}>
                    Heading
                </Text>
                <Text style={styles.heading1}>
                    Heading1
                </Text>
                <Text style={styles.heading2}>
                    Heading2
                </Text>
                <Text style={styles.heading3}>
                    Heading3
                </Text>
                <Text style={styles.bodyLarge}>
                    Body Large: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={styles.bodyMedium}>
                    Body Medium: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={styles.bodySmall}>
                    Body Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={styles.caption}>
                    Caption
                </Text>
            </View>
         </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
