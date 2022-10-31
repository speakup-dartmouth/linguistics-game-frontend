import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  labelContainer: {
    width: '90%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  heading: {
    ...globalStyles.headingOne,
  },
  username: {
    ...globalStyles.headingTwo,
    marginTop: 20,
    width: '65%',
  },
  rank: {
    ...globalStyles.headingTwo,
    marginTop: 20,
    marginLeft: 20,
    width: '10%',
  },
  score: {
    ...globalStyles.headingThree,
    marginTop: 20,
    width: '25%',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  usernameLabel: {
    ...globalStyles.headingThree,
    marginTop: 20,
    width: '60%',
  },
  rankLabel: {
    ...globalStyles.headingThree,
    marginTop: 20,
    width: '15%',
  },
  scoreLabel: {
    ...globalStyles.headingThree,
    marginTop: 20,
    width: '20%',
  },
});
