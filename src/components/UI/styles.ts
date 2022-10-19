import {
  StyleSheet,
} from 'react-native';
import { colors } from 'lib/constants';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
