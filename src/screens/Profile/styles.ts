import { globalStyles } from 'lib/styles';
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
    ...globalStyles.headingTwo,
    marginTop: 20,
  },
  consentSubheading: {
    ...globalStyles.bodyLarge,
    textAlign: 'left',
    marginTop: 5,
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
