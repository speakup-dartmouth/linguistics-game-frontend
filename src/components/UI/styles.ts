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
  textBox: {
    backgroundColor: '#F4F5F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: colors.lightBlack,
  },
});

export default styles;
