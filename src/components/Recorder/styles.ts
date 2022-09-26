import {
  StyleSheet,
} from 'react-native';
import { colors } from 'lib/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  playButton: {
    backgroundColor: colors.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 30,
  },
  playButtonText: {
    color: colors.white,
  },
  timeText: {
    marginTop: 10,
  },
});

export default styles;
