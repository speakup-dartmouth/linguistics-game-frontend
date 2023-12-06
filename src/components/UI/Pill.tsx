import { globalStyles } from 'lib/styles';
import React, { useEffect, useState } from 'react';
import {
  Text, Pressable,
} from 'react-native';
import styles from './styles';

interface PillProps {
  pill: string;
  onPress: () => void;
  isPressed: boolean;
}

function Pill({ pill, onPress, isPressed }: PillProps): JSX.Element {
  return (
    <Pressable
      style={[styles.pill, isPressed ? styles.pillPressed : {}]}
      onPress={onPress}
    >
      <Text style={styles.pillText}>{pill}</Text>
    </Pressable>
  );
}

export default Pill;


