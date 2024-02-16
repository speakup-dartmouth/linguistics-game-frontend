import { Pressable, SafeAreaView, View, Text } from "react-native";
import React from "react";
import styles from './styles';
import Locked from 'assets/locked.svg';
import Logo from 'assets/logo-for-suggest.svg';
import { useAppNavigation } from 'navigation/types';

function ConsentCard(): JSX.Element {
  const navigation = useAppNavigation();

  const share = () => {
    navigation.navigate('ResearchConsentModal');
  }
  return (
    <SafeAreaView style={styles.container}>
        <Logo style={styles.logo} />
        <View style={[styles.lockedContainer, styles.shadowContainer]}>
          <View style={styles.text}>
            <Text style={styles.welcome}>Topic Suggestion</Text>
            <Text style={styles.welcomeSubheader}>Share your voice data with Linguistic Researchers to unlock.</Text>
          </View>
          <Locked />
          <Pressable
            style={styles.consentButton}
            onPress={share}
          >
            <Text style={styles.consentText}>Share my Voice!</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}

export default ConsentCard;