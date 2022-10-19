import { colors } from 'lib/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  consentContainer: {
    width: '80%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  consentHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.lightBlack,
  },
  consentSubheading: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 5,
    color: colors.lightBlack,
  },
  buttonContainer: {
    flex: -1,
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
  consentBoxes: {
    flex: -1,
    flexDirection: 'row',
  },
});
