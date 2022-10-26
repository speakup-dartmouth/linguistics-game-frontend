import { dimensions } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subcontainer: {
    padding: 20,
    width: '100%',
  },
  welcome: {
    ...globalStyles.headingOne,
    marginBottom: 10,
  },
  scrollView: {
    marginTop: 30,
    paddingBottom: 50,
    minHeight: dimensions.height,
  },
  questionsContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
