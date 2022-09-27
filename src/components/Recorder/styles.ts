import {
  StyleSheet,
} from 'react-native';
import { colors } from 'lib/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  playButton: {
    backgroundColor: colors.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  playButtonText: {
    color: colors.white,
  },
  timeText: {
    marginTop: 10,
    alignSelf: 'center',
  },
  actionButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stop: {
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 50,
  },
});

export default styles;
