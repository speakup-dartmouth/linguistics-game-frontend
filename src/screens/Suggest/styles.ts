import { colors, dimensions } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
  suggestionCard: {
    backgroundColor: 'black',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // scrollY: ''
  },
  logo: {
    // paddingTop: 150,
  },
  middleContainer: {
    alignItems: 'center',
    width: '100%',
    height: '55%',
    paddingBottom: 100,
    marginTop: 20,
    // backgroundColor: 'black'
  },
  subcontainer: {
    padding: 20,
    width: '90%',
    height: 250,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  welcomeSubheader: {
    fontSize: 14,
    color: '#737B7D',
    marginBottom: 10,
    marginLeft: 6,
  },
  scrollView: {
    width: '100%',
    height: '34%',
    margin: 0,
    // backgroundColor: 'black',
  },
  scrollViewLaunched: {
    width: '100%',
    height: '41%',
    // backgroundColor: 'black',
  },
  queryInput: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 15,
    borderWidth: 2,
    width: '80%',
    borderColor: 'white',
    backgroundColor: '#F0F0F0'
  },
  questionsContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  shadowContainer: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  directions: {
    backgroundColor: 'white',
    width: '90%',
    height: 70,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  directionText: {
    fontSize: 10,
    color: colors.lightBlack,
    marginLeft: 4,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankCircleContainer: {
    height: 25,
    borderRadius: 1000,
    ovreflow: 'hidden',
    textAlign: 'center',
    width: 25,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'center',
  },
  rankCircleOne: {
    backgroundColor: '#ffc655',
  },
  rankCircleTwo: {
    backgroundColor: '#a6ddf4',
  },
  rankCircleThree: {
    backgroundColor: '#ffa991',
  },
  submitButton: {
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    marginBottom: 25,
    height: '6%',
    width: '60%',
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  topicViewContainer: {
    width: '95%',
    height: '82%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    // backgroundColor: 'black'
  },
  topicContainer: {
    height: 80,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 10,
    paddingRight: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicContainerLaunched: {
    height: 100,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 10,
    paddingRight: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20,
    color: '#737B7D',
  },
  icon: {
    margin: 3
    // height: '15%',
    // width: '15%',
    // aspectRatio: 1,
    // padding: 10
    // backgroundColor: 'blue'
  },
  promptText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  reviewInfoContainer: {
    height: '90%',
    width: '85%',
    marginLeft: 5,
    marginTop: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // backgroundColor: 'black'
  },
  pill: {
    width: '30%',
    // padding: 1,
    height: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  pillText: {
    fontSize: 12,
    color: colors.white,
  },
  stanceContainer: {
    flexDirection: 'row',
    width: '70%',
    height: '35%',
    alignItems: 'center'
  },
  date: {
    fontSize: 10,
    color: '#00000080',
  },
  status: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
    marginLeft: 45, 
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  statusText: {
    fontSize: 16,
    marginLeft: 4,
  },
  recordingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 70
  }
});
