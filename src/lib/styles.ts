import { StyleSheet } from 'react-native';
import { colors } from './constants';

// Global styles
export const globalStyles = StyleSheet.create({
  headingOne: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  headingTwo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  headingThree: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.lightBlack,
  },
  bodySmall: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
  },
});
