import { colors } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';
// import { colors } from 'lib/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#B3BBBB',
  },
  headingContainer: {
    width: '90%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    ...globalStyles.headingOne,
  },
  username: {
    ...globalStyles.bodySmall,
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: '17pt',
    width: '60%',
  },
  rank: {
    ...globalStyles.headingTwo,
    textAlign: 'center',
    alignSelf: 'center',
  },
  rankCircleOne: {
    backgroundColor: '#ffc655',
    borderRadius: 1000,
  },
  rankCircleTwo: {
    backgroundColor: '#a6ddf4',
  },
  rankCircleThree: {
    backgroundColor: '#ffa991',
  },
  rankCircleContainer: {
    height: 30,
    borderRadius: 1000,
    ovreflow: 'hidden',
    textAlign: 'center',
    width: 30,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'center',
  },
  rankContainer: {
    height: 30,
    textAlign: 'center',
    width: 30,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'center',
  },
  score: {
    ...globalStyles.bodySmall,
    width: '25%',
    fontSize: '18pt',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'right',
  },
  overlay: {
    position: 'absolute',
    top: 50,
    right: 15,
    height: 75,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F7FF',
    borderRadius: 15,
    alpha: 1,
    zIndex: 2,
    padding: 7,
  },
  popup: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoButton: {
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoButtonInner: {
    zIndex: 10,
    position: 'absolute',
    top: -7,
    right: -13,
  },
  infoButtonText: {
    zIndex: 10,
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.lightBlack,
    alignSelf: 'center',
    textAlign: 'center',
  },
  popupText: {
    ...globalStyles.bodySmall,
    fontSize: 14,
    color: '737B7D',
  },
});
